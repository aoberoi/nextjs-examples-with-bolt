import { App, LogLevel } from '@slack/bolt';

export default function (receiver) {
  const app = new App({
    receiver,
    token: process.env.SLACK_BOT_TOKEN,
    logLevel: LogLevel.DEBUG,
  });

  app.message('knock knock', async ({ message, say }) => {
    console.log(message);
    await say(`_Who's there?_`);
  });

  app.event('app_home_opened', async ({ event, client }) => {
    console.log('app home opened', event);
    await client.views.publish({
      user_id: event.user,
      view: {
        type: 'home',
        blocks: [
          {
            type: 'section',
            text: 'This is published from Next.js',
          },
        ],
      },
    });
  });
}
