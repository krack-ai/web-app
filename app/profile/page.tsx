"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";

export default function ProfilePage() {
  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [form, setForm] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      techStack: "",
      codingLanguages: "",
      experience: "",
    });

  const [projects, setProjects] =
    useState([
      {
        name: "",
        description: "",
      },
    ]);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile =
    async () => {
      try {
        const response =
          await fetch("/api/me");

        const data =
          await response.json();

        if (
          data.authenticated
        ) {
          const user =
            data.user;

          setForm({
            firstName:
              user.firstName ||
              "",
            lastName:
              user.lastName ||
              "",
            email:
              user.email ||
              "",
            phone:
              user.phone ||
              "",
            techStack:
              user.techStack ||
              "",
            codingLanguages:
              user.codingLanguages ||
              "",
            experience:
              user.experience ||
              "",
          });

          setProjects(
            user.projects?.length
              ? user.projects
              : [
                  {
                    name: "",
                    description:
                      "",
                  },
                ]
          );
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

  const handleChange = (
    e: { target: { name: any; value: any; }; }
  ) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
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

  const removeProject = (
    index: number
  ) => {
    if (
      projects.length === 1
    )
      return;

    setProjects(
      projects.filter(
        (_, i) =>
          i !== index
      )
    );
  };

  const updateProjectName =
    (
      index: number,
      value: string
    ) => {
      const updated = [
        ...projects,
      ];

      updated[index].name =
        value;

      setProjects(updated);
    };

  const updateProjectDescription =
    (
      index: number,
      value: string
    ) => {
      const updated = [
        ...projects,
      ];

      updated[
        index
      ].description = value;

      setProjects(updated);
    };

  const handleSave =
    async () => {
      try {
        setSaving(true);

        const response =
          await fetch(
            "/api/update-profile",
            {
              method: "PUT",
              headers: {
                "Content-Type":
                  "application/json",
              },
              body: JSON.stringify(
                {
                  ...form,
                  projects,
                }
              ),
            }
          );

        const data =
          await response.json();

        if (
          !response.ok
        ) {
          alert(
            data.error
          );
          return;
        }

        // alert(
        //   "Profile updated successfully"
        // );
      } catch (error) {
        alert(
          "Failed to update profile"
        );
      } finally {
        setSaving(false);
      }
    };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B1225] text-[#DAE2FD]">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1225] py-12">
      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-[#0B1225] text-[#DAE2FD] border border-[#414751]/30 rounded-3xl shadow-xl p-8">

          <h1 className="text-4xl font-bold mb-2">
            My Profile
          </h1>

          <p className="text-[#A3AED0] mb-10">
            Update your
            professional
            details
          </p>

          <div className="grid md:grid-cols-2 gap-5 text-black">

            <input
              name="firstName"
              value={
                form.firstName
              }
              onChange={
                handleChange
              }
              placeholder="First Name"
              className="border border-gray-200 bg-white rounded-xl p-4 text-black"
            />

            <input
              name="lastName"
              value={
                form.lastName
              }
              onChange={
                handleChange
              }
              placeholder="Last Name"
              className="border border-gray-200 bg-white rounded-xl p-4 text-black"
            />

            <input
              value={
                form.email
              }
              disabled
              className="border border-gray-200 rounded-xl p-4 bg-gray-100 text-gray-500"
            />

            <input
              value={
                form.phone
              }
              disabled
              className="border border-gray-200 rounded-xl p-4 bg-gray-100 text-gray-500"
            />

          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-5 text-black">

            <input
              name="techStack"
              value={
                form.techStack
              }
              onChange={
                handleChange
              }
              placeholder="Tech Stack"
              className="border border-gray-200 bg-white rounded-xl p-4 text-black"
            />

            <input
              name="codingLanguages"
              value={
                form.codingLanguages
              }
              onChange={
                handleChange
              }
              placeholder="Coding Languages"
              className="border border-gray-200 bg-white rounded-xl p-4 text-black"
            />

          </div>

          <div className="mt-5 text-black">
            <input
              name="experience"
              value={
                form.experience
              }
              onChange={
                handleChange
              }
              placeholder="Experience"
              className="w-full border border-gray-200 bg-white rounded-xl p-4 text-black"
            />
          </div>

          <div className="mt-10">

            <div className="flex items-center justify-between mb-5">

              <h2 className="text-2xl font-bold">
                Projects
              </h2>

              <button
                onClick={
                  addProject
                }
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#40DEA3] bg-transparent text-[#40DEA3] hover:bg-[#40DEA3]/10 transition"
              >
                <Plus
                  size={
                    18
                  }
                />
                Add Project
              </button>

            </div>

            {projects.map(
              (
                project,
                index
              ) => (
                <div
                  key={
                    index
                  }
                  className="border border-[#414751]/30 bg-[#0B1225]/40 rounded-2xl p-5 mb-4 text-black"
                >
                  <div className="flex justify-between mb-4">

                    <h3 className="font-semibold text-[#DAE2FD]">
                      Project{" "}
                      {index +
                        1}
                    </h3>

                    {index >
                      0 && (
                      <button
                        onClick={() =>
                          removeProject(
                            index
                          )
                        }
                        className="text-red-500 hover:text-red-400 transition"
                      >
                        <Trash2
                          size={
                            18
                          }
                        />
                      </button>
                    )}

                  </div>

                  <input
                    value={
                      project.name
                    }
                    onChange={(
                      e
                    ) =>
                      updateProjectName(
                        index,
                        e
                          .target
                          .value
                      )
                    }
                    placeholder="Project Name"
                    className="w-full border border-gray-200 bg-white rounded-xl p-4 mb-3 text-black"
                  />

                  <textarea
                    rows={4}
                    value={
                      project.description
                    }
                    onChange={(
                      e
                    ) =>
                      updateProjectDescription(
                        index,
                        e
                          .target
                          .value
                      )
                    }
                    placeholder="Project Description"
                    className="w-full border border-gray-200 bg-white rounded-xl p-4 text-black"
                  />

                </div>
              )
            )}

          </div>

          <button
            onClick={
              handleSave
            }
            disabled={saving}
            className="
              mt-8
              w-full
              py-4
              rounded-xl
              text-[#0B1225]
              font-bold
              bg-[#A4CDFF]
              hover:bg-[#A4CDFF]/90
              transition
            "
          >
            {saving
              ? "Updating..."
              : "Update Profile"}
          </button>

        </div>
      </div>
    </div>
  );
}