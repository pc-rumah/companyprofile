"use client";

import React from "react";
import PageBreadcrumb from "@/components/admin/common/PageBreadCrumb";
import ComponentCard from "@/components/admin/common/ComponentCard";
import Button from "@/components/admin/ui/Button";
import Badge from "@/components/admin/ui/Badge";
import Input from "@/components/admin/form/InputField";
import Label from "@/components/admin/form/Label";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

export default function AdminProfilePage() {
  const { user, signOut } = useAuth();

  const email = user?.email || "admin@castletrading.com";
  const userId = user?.id || "N/A";
  const role = user?.role || "authenticated";
  const createdAt = user?.created_at
    ? new Date(user.created_at).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    : "Active Member";
  const lastSignIn = user?.last_sign_in_at
    ? new Date(user.last_sign_in_at).toLocaleString()
    : "Current Session";

  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Admin Profile" />

      <div className="grid grid-cols-12 gap-6">
        {/* Left Column: User Summary Card */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03] text-center shadow-theme-xs">
            <div className="relative mx-auto size-24 overflow-hidden rounded-full border-4 border-white shadow-md dark:border-gray-800">
              <Image
                width={96}
                height={96}
                src="/images/user/user-01.jpg"
                alt="Profile"
                className="size-full object-cover"
              />
            </div>

            <h3 className="mt-4 font-bold text-gray-800 text-lg dark:text-white capitalize">
              {user?.user_metadata?.full_name || email.split("@")[0]}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              {email}
            </p>

            <div className="mt-3 flex justify-center">
              <Badge color="primary" size="sm">
                Supabase {role}
              </Badge>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800 text-left space-y-3 text-xs">
              <div>
                <span className="text-gray-400 block font-medium">User ID</span>
                <span className="font-mono text-gray-700 dark:text-gray-300 break-all">
                  {userId}
                </span>
              </div>
              <div>
                <span className="text-gray-400 block font-medium">Joined On</span>
                <span className="text-gray-700 dark:text-gray-300">
                  {createdAt}
                </span>
              </div>
              <div>
                <span className="text-gray-400 block font-medium">Last Login</span>
                <span className="text-gray-700 dark:text-gray-300">
                  {lastSignIn}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Button
                variant="outline"
                className="w-full text-xs"
                size="sm"
                onClick={signOut}
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column: Account & Security Settings */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <ComponentCard
            title="Profile Information"
            desc="Personal and contact details managed through Supabase"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="displayName">Display Name</Label>
                <Input
                  id="displayName"
                  defaultValue={user?.user_metadata?.full_name || "Administrator"}
                  placeholder="Full Name"
                />
              </div>
              <div>
                <Label htmlFor="emailAddress">Email Address</Label>
                <Input
                  id="emailAddress"
                  defaultValue={email}
                  disabled
                  hint="Managed through Supabase Auth"
                />
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  defaultValue="Castle Trading Group"
                  disabled
                />
              </div>
              <div>
                <Label htmlFor="designation">Role / Designation</Label>
                <Input
                  id="designation"
                  defaultValue="Operations Admin"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button size="sm">Save Changes</Button>
            </div>
          </ComponentCard>

          <ComponentCard
            title="Security & Password"
            desc="Update your authentication credentials"
          >
            <div className="space-y-4 max-w-lg">
              <div>
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input
                  id="currentPassword"
                  type="password"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                  id="newPassword"
                  type="password"
                  placeholder="Minimum 6 characters"
                />
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <Button size="sm">Update Password</Button>
            </div>
          </ComponentCard>
        </div>
      </div>
    </div>
  );
}

