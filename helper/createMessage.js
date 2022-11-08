const { Markup } = require("telegraf");
const escape = require("escape-html");

exports.startMessage = (ctx) => {
    const { first_name: firstName, last_name: lastName = "", id: userId } = ctx.from;

    const message = `<a href='tg://user?id=${userId}'>${escape(firstName)} ${escape(lastName)}</a>, MUSTOFA o'quv markazining rasmiy botiga xush kelibsiz! `;
    
    const keyboard = Markup
    .keyboard([
        ['📗 Kurslar'],
        ["📍 Manzil", "📞 Admin bilan bog'lanish"]
    ]).resize();
    
    return {
        message,
        keyboard,
    };
};

// Course Types
exports.courseTypesMessage = (ctx, status) => {
    const queryProps = {
        text: "Yo'nalishni tanlang!",
        disable_web_page_preview: true,
        parse_mode: 'HTML',
        ...Markup.inlineKeyboard([
          [Markup.button.callback('💻 Kompyuter kurslari','computerCourses')],
          [Markup.button.callback('🇬🇧 Til kurslari', 'langCourses')],
          [Markup.button.callback('📚 Fan kurslari', 'subjectCourses')],
          [Markup.button.callback('🧸 Bolalar uchun', 'childCourses')],
        ]).resize()
    };
    if(status == true) {
        const { message_id, chat:{id: chat_id} } = ctx.update.callback_query.message;
        queryProps.message_id = message_id;
        queryProps.chat_id = chat_id;
    };
    
    return queryProps;
}

// Computer Courses
exports.computerCourseMessage = (ctx) => {
    const { message_id, chat:{id: chat_id} } = ctx.update.callback_query.message;
    const queryProps = {
        text: "Kursni tanlang!",
        message_id,
        chat_id,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback('Backend Dasturlash','backendCourse')],
            [Markup.button.callback('Frontend Dasturlash','frontendCourse')],
            [Markup.button.callback('Kompyuter Savodxonligi','initialProgCourse')],
            [Markup.button.callback('🔙 Ortga','backToCourses')]
        ])
    };

    return queryProps;
};
exports.backendCourseMessage = (ctx, text) => {
    const { message_id, chat:{id: chat_id} } = ctx.update.callback_query.message;
    const queryProps = {
        text,
        message_id,
        chat_id,
        ...Markup.inlineKeyboard([
            Markup.button.callback('🔙 Ortga', 'backToProgCourses')
        ]),
        parse_mode: 'HTML',
        disable_web_page_preview: true
    };

    return queryProps;
};
exports.frontendCourseMessage = (ctx, text) => {
    const { message_id, chat:{id: chat_id} } = ctx.update.callback_query.message;
    const queryProps = {
        text,
        message_id,
        chat_id,
        ...Markup.inlineKeyboard([
            Markup.button.callback('🔙 Ortga', 'backToProgCourses')
        ]),
        parse_mode: 'HTML',
        disable_web_page_preview: true
    };

    return queryProps;
};
exports.initialProgCourseMessage = (ctx, text) => {
    const { message_id, chat:{id: chat_id} } = ctx.update.callback_query.message;
    const queryProps = {
        text,
        message_id,
        chat_id,
        ...Markup.inlineKeyboard([
            Markup.button.callback('🔙 Ortga', 'backToProgCourses')
        ]),
        parse_mode: 'HTML',
        disable_web_page_preview: true
    };

    return queryProps;
};


// Language Courses
exports.langCourseMessage = (ctx) => {
    const { message_id, chat:{id: chat_id} } = ctx.update.callback_query.message;
    const queryProps = {
        text: "Kursni tanlang!",
        message_id,
        chat_id,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback('🇬🇧 Ingliz tili (IELTS)','englishCourse')],
            [Markup.button.callback('🇷🇺 Rus tili','russianCourse')],
            [Markup.button.callback('🔙 Ortga','backToCourses')]
        ])
    };

    return queryProps;
};

// Subject Courses
exports.subjectCourseMessage = (ctx) => {
    const { message_id, chat:{id: chat_id} } = ctx.update.callback_query.message;
    const queryProps = {
        text: "Kursni tanlang!",
        message_id,
        chat_id,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback('Matematika','englishCourse')],
            [Markup.button.callback('Fizika','russianCourse')],
            [Markup.button.callback('Geografiya','russianCourse')],
            [Markup.button.callback('Kimyo','russianCourse')],
            [Markup.button.callback('Biologiya','russianCourse')],
            [Markup.button.callback('Tarix','russianCourse')],
            [Markup.button.callback('Huquq','russianCourse')],
            [Markup.button.callback('Ona tili va adabiyot','russianCourse')],
            [Markup.button.callback('🔙 Ortga','backToCourses')]
        ])
    };

    return queryProps;
};

// children Courses
exports.childCourseMessage = (ctx) => {
    const { message_id, chat:{id: chat_id} } = ctx.update.callback_query.message;
    const queryProps = {
        text: "Kursni tanlang!",
        message_id,
        chat_id,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        ...Markup.inlineKeyboard([
            [Markup.button.callback('🇬🇧 Ingliz tili (Bolalar uchun)','englishKidsCourse')],
            [Markup.button.callback('🇷🇺 Rus tili (Bolalar uchun)','russianKidsCourse')],
            [Markup.button.callback('🔙 Ortga','backToCourses')]
        ])
    };

    return queryProps;
};