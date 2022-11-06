const { Telegraf } = require('telegraf');
const MainMessage = require('./controller/main-messages.js')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN);

// start
bot.start((ctx) => MainMessage.start(ctx));

// hears
bot.hears('📗 Kurslar', (ctx) => MainMessage.courseTypes(ctx));

// actions : Computer Courses
bot.action('computerCourses', (ctx) => MainMessage.computerCourses(ctx));
bot.action('backendCourse', (ctx) => MainMessage.backendCourse(ctx));
bot.action('frontendCourse', (ctx) => MainMessage.computerCourses(ctx));
bot.action('initialProgCourse', (ctx) => MainMessage.computerCourses(ctx));


// actions : Language Courses
bot.action('langCourses', (ctx) => MainMessage.langCourses(ctx));

// cations : Subect Courses
bot.action('subjectCourses', (ctx) => MainMessage.subjectCourses(ctx));

// actions : Children Courses
bot.action('childCourses', (ctx) => MainMessage.childCourses(ctx));

// back to Main pages
bot.action('backToCourses', (ctx) => MainMessage.courseTypes(ctx, true));
bot.action('backToProgCourses', (ctx) => MainMessage.computerCourses(ctx));




bot.launch();
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));