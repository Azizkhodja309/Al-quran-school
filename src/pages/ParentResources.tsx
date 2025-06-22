import React, { useState } from "react";
import {
  Calendar,
  Download,
  Clock,
  Car,
  Shirt,
  Book
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { useLanguage } from "../contexts/LanguageContext";
import CalendarTipsModalContent from "../components/CalendarTipsModal";

const ParentResources: React.FC = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const resources = [
    {
      icon: <Calendar className="h-8 w-8 text-emerald-600" />,
      title: t("schoolCalendar"),
      description: t("schoolCalendarDesc"),
      action: t("viewCalendar"),
      onClick: () => setOpen(true)
    },
    {
      icon: <Book className="h-8 w-8 text-emerald-600" />,
      title: t("supplyLists"),
      description: t("supplyListsDesc"),
      action: t("downloadLists")
    },
    {
      icon: <Shirt className="h-8 w-8 text-emerald-600" />,
      title: t("uniformPolicy"),
      description: t("uniformPolicyDesc"),
      action: t("viewPolicy")
    },
    {
      icon: <Download className="h-8 w-8 text-emerald-600" />,
      title: t("parentHandbook"),
      description: t("parentHandbookDesc"),
      action: t("downloadPDF")
    }
  ];

  const procedures = [
    {
      icon: <Car className="h-6 w-6 text-emerald-600" />,
      title: t("dropoffProcedures"),
      description: t("dropoffProceduresDesc")
    },
    {
      icon: <Clock className="h-6 w-6 text-emerald-600" />,
      title: t("pickupProcedures"),
      description: t("pickupProceduresDesc")
    }
  ];

  const upcomingEvents = [
    {
      date: t("upcomingEventDate1"),
      event: t("upcomingEventName1"),
      time: "4:00 PM - 7:00 PM"
    },
    {
      date: t("upcomingEventDate2"),
      event: t("upcomingEventName2"),
      time: "9:00 AM - 12:00 PM"
    },
    {
      date: t("upcomingEventDate3"),
      event: t("upcomingEventName3"),
      time: "6:00 PM - 8:00 PM"
    },
    {
      date: t("upcomingEventDate4"),
      event: t("upcomingEventName4"),
      time: "No School"
    },
    {
      date: t("upcomingEventDate5"),
      event: t("upcomingEventName5"),
      time: "10:00 AM - 2:00 PM"
    }
  ];

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("parentResources")}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("parentResourcesDesc")}
            </p>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex justify-center mb-4">{resource.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {resource.description}
                  </p>
                  <button
                    className="text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors duration-200"
                    onClick={resource.onClick}
                  >
                    {resource.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Drop-off/Pick-up Procedures */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t("dropoffPickupProcedures")}
              </h2>
              <p className="text-xl text-gray-600">{t("proceduresDesc")}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {procedures.map((procedure, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{procedure.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {procedure.title}
                      </h3>
                      <p className="text-gray-700">{procedure.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t("upcomingEvents")}
              </h2>
              <p className="text-xl text-gray-600">{t("upcomingEventsDesc")}</p>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-4 shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-600">
                          {event.date.split(" ")[1]}
                        </div>
                        <div className="text-sm text-gray-500">
                          {event.date.split(" ")[0]}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {event.event}
                        </h3>
                        <p className="text-gray-600">{event.time}</p>
                      </div>
                    </div>
                    <Calendar className="h-6 w-6 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-emerald-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("stayConnected")}
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              {t("stayConnectedDesc")}
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  className="flex-1 px-4 py-3 rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                />
                <button className="px-6 py-3 bg-white text-emerald-600 rounded-md font-medium hover:bg-gray-50 transition-colors duration-200">
                  {t("subscribe")}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Calendar Modal injected into Dialog.Root */}
      <CalendarTipsModalContent />
    </Dialog.Root>
  );
};

export default ParentResources;
