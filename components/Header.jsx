"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import AuthModal from "./AuthModal";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState({});
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const router = useRouter();
useEffect(() => {
    loadUser()
    console.log(user)
}, []);

const loadUser = async () => {
    try {
      const response = await fetch("/api/me");
  
      const data = await response.json();
  
      if (data.authenticated) {
        console.log(data.user)
        setUser({...data.user});
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/logout", {
        method: "POST",
      });
  
      setUser(null);
      setShowProfileMenu(false);
  
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0B1326] border-b border-[#414751]/30">
      <div className="max-w-[1280px] mx-auto h-20 px-12 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => {
            router.push('/')
        }}>
          <Image
          src="/logo.png"
          alt="Krack AI"
          width={74}
          height={80}
          className="object-contain"
         />
         
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-white text-sm">
        <span className="cursor-pointer text-[16px] font-medium text-[#3B82F6] border-b-2 border-[#3B82F6] pb-1" onClick={() => router.push('/#features')}>Features</span>
            <span className="cursor-pointer text-[16px] font-medium text-[#C1C7D3]" onClick={() => router.push('/#reviews')}>How it Works</span>
            <span className="cursor-pointer text-[16px] font-medium text-[#C1C7D3]" onClick={() => router.push('/#privacy')}>Privacy</span>
            <span className="cursor-pointer text-[16px] font-medium text-[#C1C7D3]" onClick={() => router.push('/#pricing')}>Pricing</span>
            <span className="cursor-pointer text-[16px] font-medium text-[#C1C7D3]" onClick={() => {router.push('/referral-program')}}>Referral </span>

          <Link
          href="/download"
          className="cursor-pointer text-[16px] font-semibold bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#4EDEA3] bg-clip-text text-transparent"
          >
            Download
          </Link>


        </nav>

        {/* Desktop Button */}
        {user?.firstName ? (
  <div className="relative">
    <button
      onClick={() =>
        setShowProfileMenu(!showProfileMenu)
      }
      className="
        hidden md:block
        w-12
        h-12
        rounded-full
        text-white
        font-bold
        bg-gradient-to-r
        from-[#3882F6]
        to-[#40DEA3]
        flex
        items-center
        justify-center
      "
    >
      {user.firstName[0]}
      {user.lastName?.[0]}
    </button>

    {showProfileMenu && (
      <div className="absolute right-0 top-14 bg-white shadow-lg rounded-xl border w-48">
        <button
          onClick={() => {
            console.log("kkkkkk")
            setShowProfileMenu(false);
            router.push("/profile");
          }}
          className="w-full text-left px-4 py-3 hover:bg-gray-50"
        >
          Profile
        </button>

        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-3 text-red-500 hover:bg-red-50"
        >
          Logout
        </button>
      </div>
    )}
  </div>
) : (
  <div className="hidden md:flex items-center gap-6">
    <span 
      className="cursor-pointer text-[#C1C7D3] font-medium hover:text-white transition"
      onClick={() => setShowAuthModal(true)}
    >
      Login
    </span>
    <button
      onClick={() => setShowAuthModal(true)}
      className="
        px-8 py-3
        rounded-full
        text-white
        font-semibold
        bg-gradient-to-r
        from-[#3882F6]
        to-[#40DEA3]
      "
    >
      Get Started
    </button>
  </div>
)}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t z-1000000 bg-white text-black">
          <div className="flex flex-col p-4 gap-4">

            <span onClick={() => {
                router.push('/#features')
                setOpen(false)
                }}>Features</span>
            <span onClick={() => {
                router.push('/#reviews')
                setOpen(false)
                }}>Reviews</span>
            <span onClick={() => {
                router.push('/#privacy')
                setOpen(false)
                }}>Privacy</span>
            <span onClick={() => {
                router.push('/#pricing')
                setOpen(false)
                }}>Pricing</span>
            <span onClick={() => {
                router.push('/download')
                setOpen(false)
                }}>Download</span>
            <span onClick={() => {
                router.push('/referral-program')
                setOpen(false)
                }}>Referral Program</span>

            

            {user?.firstName ? (
                <>
                <span
            onClick={() => {
                setShowProfileMenu(false);
                router.push("/profile");
                setOpen(false)
              }}>Profile</span>
            <span onClick={handleLogout}>Logout</span>
                </>
            ) : (
  <button
    onClick={() =>
      setShowAuthModal(true)
    }
    className="
       md:block
      px-8 py-3
      rounded-full
      text-white
      font-semibold
    
      bg-gradient-to-r
      from-[#3882F6]
      to-[#40DEA3]
      "

    
  >
    Get Started
  </button>
)}

          </div>
        </div>
      )}
      <AuthModal
        open={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLoginSuccess={loadUser}
        />
    </header>
  );
}      