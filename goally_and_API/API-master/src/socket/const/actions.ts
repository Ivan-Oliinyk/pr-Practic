export const SOCKET_ACTIONS = {
  ADD_DEVICE: 'ADD_DEVICE',
  PARENT_REQUEST_TO_ADD: 'PARENT_REQUEST_TO_ADD',
  ADD_PARENT: 'ADD_PARENT',
  DEVICE_ADDED: 'DEVICE_ADDED',
};

export const ROUTINE_ACTIONS = {
  ACTIVE_ROUTINE_CHANGED: 'ACTIVE_ROUTINE_CHANGED',

  DEVICE_REQUEST_PLAY_ROUTINE: 'DEVICE_REQUEST_PLAY_ROUTINE',
  DEVICE_START_ROUTINE: 'DEVICE_START_ROUTINE',
  DEVICE_OPEN_WELCOME_ROUTINE_SCREEN: 'DEVICE_OPEN_WELCOME_ROUTINE_SCREEN',

  DEVICE_STOP_ROUTINE: 'DEVICE_STOP_ROUTINE',

  /**
   * DEVICE activity
   */
  DEVICE_PAUSE_ACTIVITY: 'DEVICE_PAUSE_ACTIVITY',
  DEVICE_PLAY_ACTIVITY: 'DEVICE_PLAY_ACTIVITY',
  DEVICE_SKIP_ACTIVITY: 'DEVICE_SKIP_ACTIVITY',
  DEVICE_COMPLETE_ACTIVITY: 'DEVICE_COMPLETE_ACTIVITY',
  DEVICE_CANCEL_ACTIVITY: 'DEVICE_CANCEL_ACTIVITY',

  /**
   * WP activity
   */
  WP_PAUSE_ACTIVITY: 'WP_PAUSE_ACTIVITY',
  WP_PLAY_ACTIVITY: 'WP_PLAY_ACTIVITY',
  WP_SKIP_ACTIVITY: 'WP_SKIP_ACTIVITY',
  WP_ADD_1MIN_TO_ACTIVITY: 'WP_ADD_1MIN_TO_ACTIVITY',
  WP_CANCEL_ACTIVITY: 'WP_CANCEL_ACTIVITY',
  WP_COMPLETE_ACTIVITY: 'WP_COMPLETE_ACTIVITY',
  WP_START_ACTIVITY_NOW: 'WP_START_ACTIVITY_NOW',
  WP_START_ACTIVITY_NEXT: 'WP_START_ACTIVITY_NEXT',
  WP_SKIP_ACTIVITY_IN_ADVANCE: 'WP_SKIP_ACTIVITY_IN_ADVANCE',
  /**
   * WP ROUTINE
   */
  WP_REQUEST_TO_PLAY_ROUTINE: 'WP_REQUEST_TO_PLAY_ROUTINE',
  WP_PLAY_PAUSED_ROUTINE: 'WP_PLAY_PAUSED_ROUTINE',
  WP_PAUSE_ROUTINE: 'WP_PAUSE_ROUTINE',
  WP_STOP_ROUTINE: 'WP_STOP_ROUTINE',
};

export const CHECKLIST_ACTIONS = {
  ACTIVE_CHECKLIST_CHANGED: 'ACTIVE_CHECKLIST_CHANGED',
  /**
   * DEVICE activity
   */
  DEVICE_COMPLETE_CHECKLIST_ACTIVITY: 'DEVICE_COMPLETE_CHECKLIST_ACTIVITY',

  /**
   * WP activity
   */
  WP_COMPLETE_CHECKLIST_ACTIVITY: 'WP_COMPLETE_CHECKLIST_ACTIVITY',
  WP_START_NEXT_CHECKLIST_ACTIVITY: 'WP_START_NEXT_CHECKLIST_ACTIVITY',
  /**
   * WP CHECKLIST
   */
  WP_REQUEST_TO_PLAY_CHECKLIST: 'WP_REQUEST_TO_PLAY_CHECKLIST',
  WP_STOP_CHECKLIST: 'WP_STOP_CHECKLIST',
  /**
   * DEVICE CHECKLIST
   */
  DEVICE_START_CHECKLIST: 'DEVICE_START_CHECKLIST',
  DEVICE_STOP_CHECKLIST: 'DEVICE_STOP_CHECKLIST',
  DEVICE_OPEN_WELCOME_CHECKLIST_SCREEN: 'DEVICE_OPEN_WELCOME_CHECKLIST_SCREEN',
};

export const SLEEP_MODE_ACTIONS = {
  ACTIVE_SLEEP_MODE_CHANGED: 'ACTIVE_SLEEP_MODE_CHANGED',

  WP_START_SLEEP_MODE: 'WP_START_SLEEP_MODE',
  WP_STOP_SLEEP_MODE: 'WP_STOP_SLEEP_MODE',

  DEVICE_START_SLEEP_MODE: 'DEVICE_START_SLEEP_MODE',
  DEVICE_STOP_SLEEP_MODE: 'DEVICE_STOP_SLEEP_MODE',
  DEVICE_COMPLETE_SLEEP_MODE: 'DEVICE_COMPLETE_SLEEP_MODE',
};

export const ROUTINE_NOTIFICATIONS = {
  PARENT_LIBRARY_CHANGED: 'PARENT_LIBRARY_CHANGED',
  CHILD_LIBRARY_CHANGED: 'CHILD_LIBRARY_CHANGED',
  PARENT_HISTORY_CHANGED: 'PARENT_HISTORY_CHANGED',
  ROUTINE_COMPLETED: 'ROUTINE_COMPLETED',
};

export const REWARD_NOTIFICATIONS = {
  PARENT_LIBRARY_CHANGED: 'REWARD_PARENT_LIBRARY_CHANGED',
  CHILD_LIBRARY_CHANGED: 'REWARD_CHILD_LIBRARY_CHANGED',
  REDEEMED_REWARDS_CHANGED: 'REDEEMED_REWARDS_CHANGED',
};

export const REMINDER_NOTIFICATIONS = {
  PARENT_LIBRARY_CHANGED: 'REMINDER_PARENT_LIBRARY_CHANGED',
  CHILD_LIBRARY_CHANGED: 'REMINDER_CHILD_LIBRARY_CHANGED',
  REMINDER_HISTORY_CHANGED: 'REMINDER_HISTORY_CHANGED',
};

export const CHECKLIST_NOTIFICATIONS = {
  PARENT_LIBRARY_CHANGED: 'CHECKLIST_PARENT_LIBRARY_CHANGED',
  CHILD_LIBRARY_CHANGED: 'CHECKLIST_CHILD_LIBRARY_CHANGED',
  CHECKLIST_HISTORY_CHANGED: 'CHECKLIST_HISTORY_CHANGED',
};

export const AAC_NOTIFICATIONS = {
  PARENT_FOLDER_LIBRARY_CHANGED: 'AAC_PARENT_FOLDER_LIBRARY_CHANGED',
  CHILD_FOLDER_LIBRARY_CHANGED: 'AAC_CHILD_FOLDER_LIBRARY_CHANGED',
  PARENT_WORD_LIBRARY_CHANGED: 'AAC_PARENT_WORD_LIBRARY_CHANGED',
  CHILD_WORD_LIBRARY_CHANGED: 'AAC_CHILD_WORD_LIBRARY_CHANGED',
  PLAYED_AAC_CHANGED: 'PLAYED_AAC_CHANGED',
};

export const BEHAVIOR_NOTIFICATIONS = {
  PARENT_LIBRARY_CHANGED: 'BEHAVIOR_PARENT_LIBRARY_CHANGED',
  CHILD_LIBRARY_CHANGED: 'BEHAVIOR_CHILD_LIBRARY_CHANGED',
  RECORDED_BEHAVIOR_CHANGED: 'RECORDED_BEHAVIOR_CHANGED',
};

export const BALANCE_NOTIFICATIONS = {
  BALANCE_CHANGED: 'BALANCE_CHANGED',
};
export const CLIENT_NOTIFICATIONS = {
  CLIENT_CHANGED: 'CLIENT_CHANGED',
  CLIENT_CONFECTED_TO_DEVICE: 'CLIENT_CONFECTED_TO_DEVICE',
};

export const QUIZLET_NOTIFICATIONS = {
  PARENT_LIBRARY_CHANGED: 'QUIZLET_PARENT_LIBRARY_CHANGED',
  CHILD_LIBRARY_CHANGED: 'QUIZLET_CHILD_LIBRARY_CHANGED',
  COMPLETED_QUIZLET_CHANGED: 'COMPLETED_QUIZLET_CHANGED',
};

export const BEHAVIOR_TRAINING_NOTIFICATIONS = {
  PARENT_LIBRARY_CHANGED: 'BEHAVIOR_TRAINING_PARENT_LIBRARY_CHANGED',
  CHILD_LIBRARY_CHANGED: 'BEHAVIOR_TRAINING_CHILD_LIBRARY_CHANGED',
  COMPLETED_TRAINING_CHANGED: 'COMPLETED_TRAINING_CHANGED',
};

export const SOUND_NOTIFICATIONS = {
  CLIENT_SOUND_CHANGED: 'CLIENT_SOUND_CHANGED',
};

export const SAFETY_NOTIFICATIONS = {
  CLIENT_SAFETY_CHANGED: 'CLIENT_SAFETY_CHANGED',
};

export const PUZZLE_NOTIFICATIONS = {
  CLIENT_PUZZLE_CHANGED: 'CLIENT_PUZZLE_CHANGED',
};

export const DEVICE_SERVICE_ACTION = {
  // Web Portal use
  WP_DEVICE_RESTART: 'WP_DEVICE_RESTART',
  WP_DEVICE_RESET: 'WP_DEVICE_RESET',
  WP_CLIENT_RESET: 'WP_CLIENT_RESET',

  // Device use
  DEVICE_RESTART: 'DEVICE_RESTART',
  DEVICE_RESET: 'DEVICE_RESET',
  EVENT_DEVICE_LOGS_SYNC: 'EVENT_DEVICE_LOGS_SYNC',

  DEVICE_RESTARTED_SUCCESSFULLY: 'DEVICE_RESTARTED_SUCCESSFULLY',
  DEVICE_RESETED_SUCCESSFULLY: 'DEVICE_RESETED_SUCCESSFULLY',
};

export const SLEEP_MODE_NOTIFICATIONS = {
  CLIENT_SLEEP_MODE_CHANGED: 'CLIENT_SLEEP_MODE_CHANGED',
  SLEEP_MODE_HISTORY_CHANGED: 'SLEEP_MODE_HISTORY_CHANGED',
};
export const GAME_CONFIG_NOTIFICATIONS = {
  CLIENT_GAME_CONFIG_CHANGED: 'CLIENT_GAME_CONFIG_CHANGED',
};
export const REMINDER_ACTIONS = {
  WP_REQUEST_TO_PLAY_REMINDER: 'WP_REQUEST_TO_PLAY_REMINDER',
  ACTIVE_REMINDER_CHANGED: 'ACTIVE_REMINDER_CHANGED',
};