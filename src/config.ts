export const FEATURE_FLAGS = {
  architecturePage: false,
  merchPage: false,
  councilPage: true,
  businessesPage: true,
  faqsPage: true,
} as const;

export const SITE = {
  title: 'Union Park Gardens',
  description: 'A historic neighborhood in Wilmington, Delaware. Est. 1918.',
  url: 'https://unionparkgardens.com',
  email: 'unionparkgardens@gmail.com',
} as const;

// PLACEHOLDER — replace with the real recurring food truck schedule.
// Set `schedule` to [] to hide the food truck strip and Events section.
export const FOOD_TRUCK = {
  note: 'Trucks set up on Bancroft Parkway, weather permitting. Schedule is seasonal — confirm before heading out.',
  schedule: [
    { day: 'Thursday', vendor: 'Vendor TBD', time: '5:00 – 8:00 PM' },
    { day: 'Saturday', vendor: 'Vendor TBD', time: '12:00 – 4:00 PM' },
  ],
} as const;
