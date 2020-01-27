import categories from './categories';

const videos = [
  {
    title: 'Hello',
    youtube_id: 'tgbNymZ7vqY',
    description: ' Hello world',
    category_id: 'education',
    created_at: '2020-01-25 13:00:00',
    updated_at: '2020-01-25 13:00:00'
  },
  {
    title: 'Comment se réveiller avant 6 heures chaque jour',
    youtube_id: 'u8dW8DrcSmo',
    description: ' Hello World',
    category_id: 'sport',
    created_at: '2020-01-25 13:00:00',
    updated_at: '2020-01-25 13:00:00'
  },
  {
    title: 'Une approche minimaliste de la finance personnelle',
    youtube_id: 'tgbNymZ7vqY',
    description: ' Hello world',
    category_id: 'music',
    created_at: '2020-01-25 13:00:00',
    updated_at: '2020-01-25 13:00:00'
  },
  {
    title: 'Learn Vuejs',
    youtube_id: 'u8dW8DrcSmo',
    description: ' Hello World',
    category_id: 'business',
    created_at: '2020-01-25 13:00:00',
    updated_at: '2020-01-25 13:00:00'
  },
  {
    title: 'Use a generic close icon for dismissing content',
    youtube_id: 'FfptlvPMdII',
    description: ' Hello world',
    category_id: 'motivation',
    created_at: '2020-01-25 13:00:00',
    updated_at: '2020-01-25 13:00:00'
  },
  {
    title:
      'How To Add Video Popup In Website Using HTML CSS Bootstrap | Add Video On HTML Website Pop-up',
    youtube_id: '8iU8LPEa4o0',
    description: ' Hello World',
    category_id: 'kitchen',
    created_at: '2020-01-25 13:00:00',
    updated_at: '2020-01-25 13:00:00'
  }
];


/**
 * This code adds "category" property to the each video in the videos array.
 *
 * {                                       {
 *   title: "..."                            title: "..."
 *   category_id: "sport"                    category_id: "sport",
 * }                             ==>         category: {
 *                                             id: "sport",
 *                                             ...
 *                                           }
 *                                         }
 */
videos.forEach((v) => {
  v.category = categories.find(c => c.id === v.category_id);
  return v;
});

export default videos;