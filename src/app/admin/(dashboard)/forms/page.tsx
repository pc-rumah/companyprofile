"use client";

import React, { useState } from "react";
import PageBreadcrumb from "@/components/admin/common/PageBreadCrumb";
import ComponentCard from "@/components/admin/common/ComponentCard";
import Input from "@/components/admin/form/InputField";
import Label from "@/components/admin/form/Label";
import Checkbox from "@/components/admin/form/Checkbox";
import Button from "@/components/admin/ui/Button";

export default function FormsPage() {
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);

  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Form Elements" />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <ComponentCard title="Basic Input Fields" desc="Standard text, email, and password form inputs">
          <div className="space-y-4">
            <div>
              <Label htmlFor="input-default">Default Input</Label>
              <Input id="input-default" placeholder="Enter placeholder text" />
            </div>

            <div>
              <Label htmlFor="input-email">Email Input</Label>
              <Input id="input-email" type="email" placeholder="info@castletrading.com" />
            </div>

            <div>
              <Label htmlFor="input-password">Password Input</Label>
              <Input id="input-password" type="password" placeholder="••••••••" />
            </div>
          </div>
        </ComponentCard>

        <ComponentCard title="Input States" desc="Success, error, and disabled input variations">
          <div className="space-y-4">
            <div>
              <Label htmlFor="input-success">Success State</Label>
              <Input
                id="input-success"
                defaultValue="Valid container booking reference"
                success
                hint="Verification passed with shipping liner"
              />
            </div>

            <div>
              <Label htmlFor="input-error">Error State</Label>
              <Input
                id="input-error"
                defaultValue="invalid-format-id"
                error
                hint="Please enter a valid container code (e.g. MSKU1234567)"
              />
            </div>

            <div>
              <Label htmlFor="input-disabled">Disabled State</Label>
              <Input
                id="input-disabled"
                defaultValue="System auto-generated certificate hash"
                disabled
              />
            </div>
          </div>
        </ComponentCard>

        <ComponentCard title="Checkboxes & Controls" desc="Interactive form selection controls">
          <div className="space-y-4">
            <Checkbox
              id="chk-1"
              label="Enable automated email notifications on consignment status change"
              checked={isChecked1}
              onChange={setIsChecked1}
            />
            <Checkbox
              id="chk-2"
              label="Require two-factor verification on export releases"
              checked={isChecked2}
              onChange={setIsChecked2}
            />
            <Checkbox
              id="chk-3"
              label="Archived compliance check (Disabled)"
              checked={true}
              disabled
              onChange={() => {}}
            />
          </div>
        </ComponentCard>

        <ComponentCard title="Quick Action Form" desc="Sample operational action form">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <Label htmlFor="inquiry-title">Inquiry Subject</Label>
              <Input id="inquiry-title" placeholder="e.g. 5 Containers to Dammam Port" />
            </div>
            <div>
              <Label htmlFor="notes">Internal Remarks</Label>
              <textarea
                id="notes"
                rows={3}
                className="w-full rounded-lg border border-gray-300 p-3 text-sm placeholder:text-gray-400 focus:border-brand-500 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                placeholder="Add shipment notes or quality requirements..."
              />
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <Button variant="outline" size="sm">Cancel</Button>
              <Button size="sm">Submit Record</Button>
            </div>
          </form>
        </ComponentCard>
      </div>
    </div>
  );
}

