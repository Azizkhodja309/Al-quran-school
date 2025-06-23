import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import CalendarGrid from "./CalendarGrid";

const CalendarTipsModalContent: React.FC = () => (
  <>
    <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
    <Dialog.Content className="fixed z-50 top-1/2 left-1/2 w-[95vw] h-[95vh] max-w-[1200px] -translate-x-1/2 -translate-y-1/2 bg-amber-50 rounded-lg shadow-xl overflow-auto">
      <div className="relative">
        <div className="bg-gray-50 p-4 rounded-lg">
          <Dialog.Close className="absolute top-6 right-6 text-green-700 hover:text-green-900 z-50 p-1 hover:bg-green-100 rounded-full">
            <X size={24} />
          </Dialog.Close>
          <CalendarGrid />
        </div>
      </div>
    </Dialog.Content>
  </>
);

export default CalendarTipsModalContent;