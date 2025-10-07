import React, { useState } from "react";

const NotificationPage = () => {
  // Notification Data (Dynamic Array)
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      user: "Mark Webber",
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      action: "reacted to your recent post",
      content: "My first tournament today!",
      time: "1m ago",
      unread: true,
    },
    {
      id: 2,
      user: "Angela Gray",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      action: "followed you",
      time: "5m ago",
      unread: true,
    },
    {
      id: 3,
      user: "Jacob Thompson",
      avatar: "https://randomuser.me/api/portraits/men/13.jpg",
      action: "has joined your group",
      content: "Chess Club",
      time: "1 day ago",
      unread: true,
    },
    {
      id: 4,
      user: "Rizky Hasanuda",
      avatar: "https://randomuser.me/api/portraits/men/14.jpg",
      action: "sent you a private message",
      time: "5 days ago",
      message:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I’m already having lots of fun and improving my game.",
    },
    {
      id: 5,
      user: "Kimberly Smith",
      avatar: "https://randomuser.me/api/portraits/women/15.jpg",
      action: "commented on your picture",
      time: "1 week ago",
      picture: "	https://chadikoberssy.github.io/Notifications-Page-Template/assets/images/image-chess.webp",
    },
    {
      id: 6,
      user: "Nathan Peterson",
      avatar: "https://randomuser.me/api/portraits/men/16.jpg",
      action: "reacted to your recent post",
      content: "5 end-game strategies to increase your win rate",
      time: "2 weeks ago",
    },
    {
      id: 7,
      user: "Anna Kim",
      avatar: "https://randomuser.me/api/portraits/women/17.jpg",
      action: "left the group",
      content: "Chess Club",
      time: "2 weeks ago",
    },
  ]);

  // Mark all as read
  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  return (
    <div className="max-w-4xl mx-auto mt-6 sm:mt-8 shadow-md rounded-lg p-4 sm:p-6 lg:p-8 bg-gray-100">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
        <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2">
          Notifications
          <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs sm:text-sm">
            {notifications.filter((n) => n.unread).length}
          </span>
        </h2>
        <button
          onClick={markAllAsRead}
          className="text-blue-600 text-sm hover:underline self-start sm:self-auto"
        >
          Mark all as read
        </button>
      </div>

      {/* Notification List (Scrollable) */}
      <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 rounded-lg cursor-pointer ${
              n.unread ? "bg-blue-50" : "bg-white"
            }`}
          >
            {/* Avatar */}
            <img
              src={n.avatar}
              alt={n.user}
              className="w-10 h-10 rounded-full"
            />

            {/* Content */}
            <div className="flex-1">
              <p className="text-sm sm:text-base">
                <span className="font-bold">{n.user}</span> {n.action}{" "}
                {n.content && (
                  <span className="font-semibold text-gray-700 cursor-pointer hover:text-blue-600">
                    {n.content}
                  </span>
                )}
                {n.unread && (
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full ml-2"></span>
                )}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">{n.time}</p>

              {/* Private Message */}
              {n.message && (
                <div className="border rounded-lg p-3 mt-2 text-sm text-gray-600">
                  {n.message}
                </div>
              )}
            </div>

            {/* Picture (for comments) */}
            {n.picture && (
              <img
                src={n.picture}
                alt="comment"
                className="w-12 h-12 sm:w-10 sm:h-10 rounded-md"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
