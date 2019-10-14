import uuid from 'uuid';

const modlistState = {
  cards: [
    {
      id: uuid.v4(),
      Title: '',
      Image: '',
      ImageTitle: '',
      Description: '',
      Author: '',
      Link: ''
    },
    {
      id: uuid.v4(),
      Title: 'The best modlist on earth',
      Image: 'https://ohmy.disney.com/wp-content/uploads/2014/03/Deep-Thoughts-with-Kronk-Self-Affirmation.png',
      ImageTitle: 'Deep Thoughts with Kronk',
      Description: 'This modlist may only have 5 mods but every mod is hand selected!',
      Author: 'erri120',
      Link: 'https://tinyurl.com/l4uccqj'
    }
  ]
}

export default modlistState;
