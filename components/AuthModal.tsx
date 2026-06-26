"use client";

import { useState } from "react";
import { X, Plus, Trash2 } from "lucide-react";
import Snackbar from "@/components/SnackBar";
import useSnackbar from "@/hooks/useSnackbar";

interface Props {
    open: boolean;
    onClose: () => void;
    onLoginSuccess: () => void
}

export default function AuthModal({
    open,
    onClose,
    onLoginSuccess
}: Props) {
    const [mode, setMode] =
        useState<"login" | "register">("login");

    const [step, setStep] = useState(1);

    const [loginForm, setLoginForm] = useState({
        email:"",
        password:""
    })

    const [projects, setProjects] = useState([
        {
            name: "",
            description: "",
        },
    ]);
    const [otp, setOtp] = useState("")

    const [regsiterForm, setRegsiterForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        techStack: "",
        codingLanguages: "",
        role:"",
        experience: "",
    })
    const {
        snackbar,
        showSnackbar,
      } = useSnackbar();

   

    if (!open) return null;



    const validateStep1 = () => {
        if (!regsiterForm.firstName.trim()) {
            showSnackbar(
                "First name is required",
                "error"
            );
            return false;
        }

        if (!regsiterForm.lastName.trim()) {
            showSnackbar(
                "Last name is required",
                "error"
            );
            return false;
        }

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
            !emailRegex.test(
                regsiterForm.email
            )
        ) {
            showSnackbar(
                "Enter valid email",
                "error"
            );
            return false;
        }

        if (
            regsiterForm.phone.length !== 10
        ) {
            showSnackbar(
                "Enter valid phone number",
                "error"
            );
            return false;
        }

        if (
            regsiterForm.password.length < 8
        ) {
            showSnackbar(
                "Password must be at least 8 characters",
                "error"
            );
            return false;
        }

        if (
            regsiterForm.password !==
            regsiterForm.confirmPassword
        ) {
            showSnackbar(
                "Passwords do not match",
                "error"
            );
            return false;
        }

        return true;
    };

    const addProject = () => {
        setProjects([
            ...projects,
            {
                name: "",
                description: "",
            },
        ]);
    };
    const removeProject = (index: number) => {
        if (projects.length === 1) return;

        setProjects(
            projects.filter((_, i) => i !== index)
        );
    };
    const updateProjectName = (
        index: number,
        value: string
    ) => {
        const updated = [...projects];

        updated[index] = {
            ...updated[index],
            name: value,
        };

        setProjects(updated);
    };
    const updateProjectDescription = (
        index: number,
        value: string
    ) => {
        const updated = [...projects];

        updated[index] = {
            ...updated[index],
            description: value,
        };

        setProjects(updated);
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    ) => {
        setRegsiterForm({
            ...regsiterForm,
            [e.target.name]: e.target.value,
        });
    };

    const sendOtp = async () => {
        if (!validateStep1()) return;

        try {
            const response = await fetch(
                "/api/send-otp",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify({
                        email: regsiterForm.email,
                        name: regsiterForm.firstName,
                    }),
                }
            );

            const data =
                await response.json();

            if (!data.success) {
                showSnackbar(
                    data.message,
                    "error"
                );
                return;
            }

            showSnackbar("OTP Sent");

            setStep(2);
        } catch {
            showSnackbar(
                "Failed to send OTP",
                "error"
            );
        }
    };

    const verifyOtp = async () => {
        if (!otp.trim()) {
            showSnackbar(
                "Enter OTP",
                "error"
            );
            return;
        }

        try {
            const response = await fetch(
                "/api/verify-otp",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify({
                        email: regsiterForm.email,
                        otp,
                    }),
                }
            );

            const data =
                await response.json();

            if (!data.success) {
                showSnackbar(
                    data.message,
                    "error"
                );
                return;
            }

            showSnackbar(
                "OTP Verified"
            );

            setStep(3);
        } catch {
            showSnackbar(
                "OTP Verification Failed",
                "error"
            );
        }
    };

    const validateStep3 = () => {
        if (
            !regsiterForm.techStack.trim()
        ) {
            showSnackbar(
                "Tech stack required",
                "error"
            );
            return false;
        }

        if (
            !regsiterForm.codingLanguages.trim()
        ) {
            showSnackbar(
                "Coding language required",
                "error"
            );
            return false;
        }

        if (
            !regsiterForm.experience.trim()
        ) {
            showSnackbar(
                "Experience required",
                "error"
            );
            return false;
        }

        const invalidProject =
            projects.find(
                (project) =>
                    !project.name.trim() ||
                    !project.description.trim()
            );

        if (invalidProject) {
            showSnackbar(
                "Complete all project details",
                "error"
            );
            return false;
        }

        return true;
    };

    const handleRegister = async () => {
        if (!validateStep3()) return;

        try {
            const payload = {
                ...regsiterForm,
                projects,
            };

            const response = await fetch(
                "/api/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );

            const data =
                await response.json();

            if (!response.ok) {
                showSnackbar(
                    data.error,
                    "error"
                );
                return;
            }

            showSnackbar(
                "Registration Successful"
            );

            setMode("login");
            setStep(1);

        } catch {
            showSnackbar(
                "Registration Failed",
                "error"
            );
        }
    };

    const handleLoginForm = (
        e: React.ChangeEvent<HTMLInputElement>
      ) => {
        setLoginForm({
          ...loginForm,
          [e.target.name]: e.target.value,
        });
      };
      const handleLogin = async () => {
        if (!loginForm.email.trim()) {
          showSnackbar(
            "Email is required",
            "error"
          );
          return;
        }
      
        if (!loginForm.password.trim()) {
          showSnackbar(
            "Password is required",
            "error"
          );
          return;
        }
      
        try {
          const response = await fetch(
            "/api/login",
            {
              method: "POST",
              headers: {
                "Content-Type":
                  "application/json",
              },
              body: JSON.stringify(
                loginForm
              ),
            }
          );
      
          const data =
            await response.json();
      
          if (data.error) {
            showSnackbar(
              data.error ||
                "Login failed",
              "error"
            );
            return;
          }
      
          showSnackbar(
            "Login Successful"
          );
      
          // Store user
          localStorage.setItem(
            "user",
            JSON.stringify(data.user)
          );
          if (data.user) {
            onLoginSuccess?.();
            onClose();
          }
      
        // //   Close modal
        //   setTimeout(() => {
        //     onClose();
      
        //     window.location.href =
        //       data.user?.isAdmin
        //         ? "/admin"
        //         : "/profile";
        //   }, 1000);
      
        } catch (error) {
          showSnackbar(
            "Something went wrong",
            "error"
          );
        }
      };

    return (
        <div className="
        fixed inset-0 
        bg-[#0B1225]
        flex items-center
        justify-center
        overflow-hidden ">

        <div className="absolute -left-32 -top-52 w-[768px] h-[623px] rounded-full bg-[#D4E4FF]/3 blur-[120px]" />
        <div className="absolute -right-32 -bottom-52 w-[640px] h-[519px] rounded-full bg-[#4EDEA3]/3 blur-[120px]" />
        <div className="absolute left-[45%] top-[55%] -translate-x-1/2 -translate-y-1/2 w-[512px] h-[468px] rounded-full bg-[#3B82F6] blur-[222px]" />
        <div className="absolute left-[55%] top-[55%] -translate-x-1/2 -translate-y-1/2 w-[512px] h-[468px] rounded-full bg-[#8B5CF6] blur-[222px]" />

            <div className=" relative z-10 bg-[#182034] border border-white/[0.08] backdrop-blur-[12px] w-full max-w-[479px] rounded-xl  max-h-[90vh] overflow-y-auto">

            <Snackbar
                open={snackbar.open}
                message={snackbar.message}
                type={snackbar.type}
            />

                {/* Header */}
                <div className="sticky top-0 bg-transparent text-[#DAE2FD] border-b border-white/5 px-6 py-4 flex items-center justify-between">
                    <h2 className="text-2xl font-bold">
                        {mode === "login"
                            ? "Sign In"
                            : "Create Account"}
                    </h2>

                    <button onClick={onClose} className="text-[#DAE2FD] hover:text-[#40DEA3]">
                        <X />
                    </button>
                </div>

                <div className="p-6">

                    {/* LOGIN */}
                    {mode === "login" && (
                        <div className="space-y-4 text-[#DAE2FD]">

                            <input
                                name="email"
                                value={loginForm.email}
                                onChange={handleLoginForm}
                                placeholder="Email"
                                className="w-full border border-[#6B7280] bg-[#0B1225] text-[#DAE2FD] rounded-xl p-4 placeholder:text-[#C1C7D3]"
                            />

                            <input
                                name="password"
                                type="password"
                                value={loginForm.password}
                                onChange={handleLoginForm}
                                placeholder="Password"
                                className="w-full border border-[#1F2A44] bg-[#0B1225] text-[#DAE2FD] rounded-xl p-4 placeholder:text-[#C1C7D3]"
                            />

                            <button
                            onClick={handleLogin}
                                className="
                 
                                w-full
                                py-4
                                rounded-[12px]
                              text-[#0B1225]
                                font-semibold
                              bg-[#40DEA3]
                            hover:bg-[#40DEA3]/90
                             "
                
                            >
                                Login
                            </button>

                            <p className="text-center">
                                Don't have an account?{" "}
                                <button
                                    className="text-[#40DEA3] font-semibold"
                                    onClick={() => {
                                        setMode("register");
                                        setStep(1);
                                    }}
                                >
                                    Register
                                </button>
                            </p>
                        </div>
                    )}

                    {/* REGISTER */}
                    {mode === "register" && (
                        <>
                            {/* Progress */}
                            <div className="flex items-center gap-2 mb-8 text-black">
                                {[1, 2, 3].map((item) => (
                                    <div
                                        key={item}
                                        className={`h-2 flex-1 rounded-full ${item <= step
                                                ? "bg-gradient-to-r from-[#3882F6] to-[#40DEA3]"
                                                : "bg-[#2A303C]"
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* STEP 1 */}
                            {step === 1 && (
                                <div className="space-y-4 text-black">

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <input
                                            name="firstName"
                                            value={regsiterForm.firstName}
                                            onChange={handleChange}
                                            placeholder="First Name"
                                            className=" w-full border border-[#6B7280] rounded-[24px] bg-[#FFFFFF] text-[#DAE2FD] text-[#64748B] px-6 py-5 placeholder:text-[#64748B]"
                                        />

                                        <input
                                            name="lastName"
                                            value={regsiterForm.lastName}
                                            onChange={handleChange}
                                            placeholder="Last Name"
                                            className="w-full border border-[#6B7280] rounded-[24px] bg-[#FFFFFF] text-[#DAE2FD] text-[#64748B] px-6 py-5 placeholder:text-[#64748B]"
                                        />
                                        
                                    </div>

                                    <input
                                        name="email"
                                        value={regsiterForm.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        className="w-full border border-[#6B7280] rounded-[24px] bg-[#FFFFFF] text-[#DAE2FD] text-[#64748B] px-6 py-5 placeholder:text-[#64748B]"
                                        />
                                    

                                    <input
                                        name="phone"
                                        value={regsiterForm.phone}
                                        onChange={handleChange}
                                        placeholder="Phone"
                                        className="w-full border border-[#6B7280] rounded-[24px] bg-[#FFFFFF] text-[#DAE2FD] text-[#64748B] px-6 py-5 placeholder:text-[#64748B]"
                                        />
                                    

                                    <input
                                        name="password"
                                        value={regsiterForm.password}
                                        onChange={handleChange}
                                        type="password"
                                        placeholder="Password"
                                        className="w-full border border-[#6B7280] rounded-[24px] bg-[#FFFFFF] text-[#DAE2FD] text-[#64748B] px-6 py-5 placeholder:text-[#64748B]"
                                        />
                                    

                                    <input
                                        name="confirmPassword"
                                        value={regsiterForm.confirmPassword}
                                        onChange={handleChange}
                                        type="password"
                                        placeholder="Confirm Password"
                                        className="w-full border border-[#6B7280] rounded-[24px] bg-[#FFFFFF] text-[#DAE2FD] text-[#64748B] px-6 py-5 placeholder:text-[#64748B]"
                                        />
                                    

                                    <button
                                        onClick={(() => sendOtp())}
                                        className="
                      w-full
                      py-4
                      rounded-[12px]
                      bg-[#40DEA3]
                      hover:bg-[#40DEA3]/90
                      text-[#0B1225]
                      font-semibold
                    "
                                    >
                                        Send OTP
                                    </button>
                                </div>
                            )}

                            {/* STEP 2 */}
                            {step === 2 && (
                                <div className="space-y-4 text-black">

                                    <h3 className="font-semibold text-[#DAE2FD]">
                                        Verify OTP sent to your email :
                                    </h3>

                                    <input
                                        value={otp}
                                        name="otp"
                                        onChange={e => setOtp(e.target.value)}
                                        placeholder="Enter OTP"
                                        className="w-full border rounded-xl p-4"
                                    />

                                    <button
                                        onClick={() => verifyOtp()}
                                        className="
                      w-full
                      py-4
                      rounded-xl
                      text-white
                      bg-gradient-to-r
                      from-pink-500
                      to-orange-300
                    "
                                    >
                                        Verify OTP
                                    </button>
                                </div>
                            )}

                            {/* STEP 3 */}
                            {step === 3 && (
                                <div className="space-y-5 text-black">

                                    <input
                                        name="techStack"
                                        value={regsiterForm.techStack}
                                        onChange={handleChange}
                                        placeholder="Tech Stack"
                                        className="w-full border rounded-xl p-4"
                                    />

                                    <input
                                        name="codingLanguages"
                                        value={regsiterForm.codingLanguages}
                                        onChange={handleChange}
                                        placeholder="Coding Languages"
                                        className="w-full border rounded-xl p-4"
                                    />

                                    <input
                                        name="role"
                                        value={regsiterForm.role}
                                        onChange={handleChange}
                                        placeholder="Role"
                                        className="w-full border rounded-xl p-4"
                                    />

                                    <input
                                        name="experience"
                                        value={regsiterForm.experience}
                                        onChange={handleChange}
                                        placeholder="Experience"
                                        className="w-full border rounded-xl p-4"
                                    />

                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-bold text-lg text-[#DAE2F]">
                                                Projects
                                            </h3>

                                            <button
                                                type="button"
                                                onClick={addProject}
                                                className="
                          flex
                          items-center
                          gap-2
                          px-4
                          py-2
                          rounded-lg
                          border border-[#40DEA3]
                          bg-transparent
                          text-[40DEA3]
                          hover:bg-[#40DEA3]/10
                        "
                                            >
                                                <Plus size={18} />
                                                Add Project
                                            </button>
                                        </div>

                                        {projects.map((project, index) => (
                                            <div
                                                key={index}
                                                className="border border-[#334155] bg[#0B1225]/40 rounded-2xl p-4 mb-4"
                                            >
                                                <div className="flex items-center justify-between mb-3">
                                                    <h4 className="font-semibold text-[#DAE2FD]">
                                                        Project {index + 1}
                                                    </h4>

                                                    {projects.length > 1 && (
                                                        <button
                                                            type="button"
                                                            onClick={() => removeProject(index)}
                                                            className="
            flex
            items-center
            gap-1
            text-red-500
            hover:text-red-400
          "
                                                        >
                                                            <Trash2 size={18} />
                                                            Remove
                                                        </button>
                                                    )}
                                                </div>

                                                <input
                                                    value={project.name}
                                                    onChange={(e) =>
                                                        updateProjectName(
                                                            index,
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder={`Project ${index + 1} Name`}
                                                    className="w-full border rounded-xl p-4 mb-3"
                                                />

                                                <textarea
                                                    value={project.description}
                                                    onChange={(e) =>
                                                        updateProjectDescription(
                                                            index,
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Project Description"
                                                    rows={4}
                                                    className="w-full border rounded-xl p-4"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        onClick={handleRegister}
                                        className="
                      w-full
                      py-4
                      rounded-xl
                      text-white
                      font-semibold
                      bg-gradient-to-r
                      from-pink-500
                      to-orange-300
                    "
                                    >
                                        Register
                                    </button>
                                </div>
                            )}

                            <p className="text-center text-[#C1C7D3] mt-6">
                                Already have an account?{" "}
                                <button
                                    className="text-[#40DEA3] font-semibold"
                                    onClick={() =>
                                        setMode("login")
                                    }
                                >
                                    Login
                                </button>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}