const { Telegraf } = require('telegraf');
const MainMessage = require('./controller/main-messages.js')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN);

// start
bot.start((ctx) => MainMessage.start(ctx));

// hears
bot.hears('📗 Kurslar', (ctx) => MainMessage.courseTypes(ctx));
bot.hears('📍 Manzil', (ctx)=> {
    ctx.replyWithHTML(`
    <b>Mustofa o'quv markazi:</b>
https://maps.app.goo.gl/6GFULaWkL4CkBnuC7
    `)

    // ctx.replyWithLocation('39.029142', '66.582972')})
})

// Call to Admin
bot.hears("📞 Admin bilan bog'lanish",(ctx)=>{
    ctx.reply("Iltimos telefon raqamingizni qoldiring!", {
        reply_markup: {
          keyboard: [
            [
              {
                text: "📲 Telefon raqamni ulashish",
                request_contact: true,
              },
            ],
          ],
          one_time_keyboard: true,
        },
      })
    //   return MainMessage.courseTypes(ctx, true)
})
bot.on('contact',async(ctx)=> {
    await ctx.reply('Telefon raqamingiz adminga yuborildi! Sizga aloqaga chiqishadi')
    MainMessage.courseTypes(ctx, false)
})

// actions : Computer Courses
bot.action('computerCourses', (ctx) => MainMessage.computerCourses(ctx));
bot.action('backendCourse', (ctx) => MainMessage.backendCourse(ctx));
bot.action('frontendCourse', (ctx) => MainMessage.frontendCourse(ctx));
bot.action('initialProgCourse', (ctx) => MainMessage.initialProgCourse(ctx));
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