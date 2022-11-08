const {
    apiModel,
    messageModel,
    aboutTexts
} = require("../helper/index");


exports.start = async(ctx) =>{
    const { message, keyboard } = messageModel.startMessage(ctx);
    return await ctx.replyWithHTML(message, keyboard);
};

exports.courseTypes = async(ctx, status = false) =>{
    const queryProps = messageModel.courseTypesMessage(ctx, status);

    if(status == true) 
      return apiModel.apiRequestPOST(queryProps, 'editMessageText');
    
    return await ctx.reply(queryProps.text, queryProps);
};

// computer Courses
exports.computerCourses = (ctx) => {
    const queryProps = messageModel.computerCourseMessage(ctx);
    apiModel.apiRequestPOST(queryProps, 'editMessageText');
};
exports.backendCourse = (ctx) => {
  const text = aboutTexts.backendCourse();
  const queryProps = messageModel.backendCourseMessage(ctx, text);
  apiModel.apiRequestPOST(queryProps, 'editMessageText');
};
exports.frontendCourse = (ctx) => {
  const text = aboutTexts.frontendCourse();
  const queryProps = messageModel.frontendCourseMessage(ctx, text);
  apiModel.apiRequestPOST(queryProps, 'editMessageText');
};
exports.initialProgCourse = (ctx) => {
  const text = aboutTexts.initialProgCourse();
  const queryProps = messageModel.initialProgCourseMessage(ctx, text);
  apiModel.apiRequestPOST(queryProps, 'editMessageText');
};



// Language Courses
exports.langCourses = (ctx) => {
  const queryProps = messageModel.langCourseMessage(ctx);
  apiModel.apiRequestPOST(queryProps, 'editMessageText');
};


// Subject Courses
exports.subjectCourses = (ctx) => {
  const queryProps = messageModel.subjectCourseMessage(ctx);
  apiModel.apiRequestPOST(queryProps, 'editMessageText');
};



// Kids Courses
exports.childCourses = (ctx) => {
  const queryProps = messageModel.childCourseMessage(ctx);
  apiModel.apiRequestPOST(queryProps, 'editMessageText');
};
