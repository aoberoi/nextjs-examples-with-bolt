import { App } from '@slack/bolt';

export default function (receiver) {
  const app = new App({
    receiver,
    token: process.env.SLACK_BOT_TOKEN,
  });

  app.message('knock knock', async ({ message, say }) => {
    console.log(message);
    await say(`_Who's there?_`);
  });
}
