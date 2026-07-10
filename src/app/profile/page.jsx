'use client'
import { ModalPage } from '@/component/ModalPage';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import { motion } from 'framer-motion';

const ProfilePage = () => {
  const userData = authClient.useSession()
  const user = userData.data?.user

  return (
    <div className="flex flex-col justify-center items-center min-h-[70vh] bg-gradient-to-b from-[#ccffcc]/5 to-[#ccffcc]/20 px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md mx-auto"
      >
        <Card className="p-8 md:p-12 flex flex-col justify-center items-center shadow-lg hover:shadow-xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-3xl space-y-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Avatar className="h-24 w-24 border-4 border-[#ccffcc] shadow-md">
              <Avatar.Image 
                alt={user?.name} 
                src={user?.image} 
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback className="text-2xl font-bold bg-[#004d00] text-white">
                {user?.name ? user.name.charAt(0).toUpperCase() : "?"}
              </Avatar.Fallback>
            </Avatar>
          </motion.div>

          <div className="text-center space-y-1">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              {user?.name || "Guest User"}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              {user?.email || "No email linked"}
            </p>
          </div>

          <div className="w-full pt-4 border-t border-gray-100 dark:border-zinc-800/80 flex flex-col items-center">
            <ModalPage />
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default ProfilePage;