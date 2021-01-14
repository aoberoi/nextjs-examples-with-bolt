import { HTTPReceiver } from '@slack/bolt';
import bolt from '../../../lib/bolt';

const receiver = new HTTPReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  processBeforeResponse: true,
  endpoints: '/api/slack/events',
});

bolt(receiver);

export default receiver.requestListener;

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}