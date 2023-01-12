<template>
  <div>
    <div class="header-container">
      <video-background
      class="main-header py-8 mb-10"
      src="/video/hero.mp4" poster="/imgs/hero.png">
        <div class="main-header__content">
          <h1 class="hero-heading mb-4 pa-4 white--text">
              التقديم للوظائف الموسمية لإدارة الحشود بقطار المشاعر المقدسة لموسم حج 1444 هـ
          </h1>
          <v-btn link href="https://google.com" depressed color="white"
          class="hero-btn">
              <div class="d-flex align-center gap-sm font-weight-bold primary--text">
              <span>التقديم الآن</span>
              <v-icon>mdi-arrow-left-thin</v-icon>
              </div>
          </v-btn>
        </div>
      </video-background>
    </div>
    <section class="about-section mb-8 overflow-hidden">
      <v-container class="main-page-container">
        <img class="bg-wave-shape" src="/imgs/wave-shape.png" alt="shape wave" />
        <v-row>
          <v-col cols="12" md="6" lg="5" class="order-2 order-md-1">
            <div class="about__img">
              <img class="about-shape reveal" src="/imgs/shape.png" alt="shape" />
              <v-img class="about-section__img reveal" width="400px" max-width="100%" src="/imgs/about.png"></v-img>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="d-flex flex-column align-center align-sm-start order-1 order-md-2 pt-md-10">
            <div class="heading-badge d-inline-flex align-center gap mb-4 py-2 px-4 reveal">
              <img src="/imgs/stars.svg" alt="stars icon">
              <span class="font-weight-bold primary--text">قطار المشاعر المقدسة</span>
            </div>
            <h2 class="section-heading mb-4 font-weight-bold text-center text-sm-start reveal">
              عن مشروع تشغيل ادارة الحشود لقطار المشاعر المقدسة
            </h2>
            <p class="section-text text-center text-sm-start reveal">
              بناء على إسناد مهمة تنفيذ مشروع تشغيل إدارة الحشود لقطار المشاعر المقدسة لموسم حج 1444 هـ على شركة اليمامة بموجب عقدها المبرم مع شركة الخطوط الحديدية السعودية (سار) ، عليه ولما كان تشغيل المشروع الموسمي بحاجة لتوظيف وتشغيل موظفين موسميين، تنتهي مهامهم بانتهاء موسم حج 1444 هـ
            </p>
          </v-col>
          <v-col cols="12" lg="1"></v-col>
        </v-row>
      </v-container>
    </section>

    <section class="work-stats py-8 my-4">
      <v-container class="main-page-container">
        <div class="d-flex flex-column align-center mb-10 text-center">
          <h2 class="section-heading font-weight-bold reveal">
            احصائيات عن العمل
          </h2>
          <h3 class="section-subheading reveal">
            نحن جد فخورين بمشاركة هذه الإحصائيات حول المشروع
          </h3>
        </div>
        <v-row class="justify-md-center">
          <v-col cols="12" md="6" lg="3" class="d-flex reveal">
            <v-card elevation="0" color="primary-2" class="features-card pa-6">
              <v-img width="65" src="/imgs/case.svg"></v-img>
              <h3 class="py-4 text-h4 white--text">7,000 موظف</h3>
              <p class="secondary--text">
                موظفين بعدة مسميات وظيفية يعملون في خدمة ضيوف الرحمن ضمن وظائف متعددة من ادارة المحطات.
              </p>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="3" class="d-flex reveal">
            <v-card elevation="0" color="primary-2" class="features-card pa-6">
              <v-img width="65" src="/imgs/chart.svg"></v-img>
              <h3 class="py-4 text-h4 white--text">%90 سعودين</h3>
              <p class="secondary--text">
                زيادة نسبة توطين الوظائف وزيادة فرص العمل لمواطني المملكة.
              </p>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="3" class="d-flex reveal">
            <v-card elevation="0" color="primary-2" class="features-card pa-6">
              <v-img width="70" src="/imgs/translate.svg"></v-img>
              <h3 class="py-4 text-h4 white--text">4 لغات</h3>
              <p class="secondary--text">
                موظفين يتحدثون 4 لغات مختلفة.
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="train-about py-10">
      <v-container class="main-page-container">
        <div class="mb-16">
          <div class="d-flex flex-column align-center mb-4 text-center">
            <h2 class="section-heading font-weight-bold">
              <img class="train-about-shape" src="/imgs/shape.png" alt="shape" />
              <span class="reveal">
                كل ما تود معرفته عن قطار المشاعر المقدسة
              </span>
            </h2>
            <h3 class="section-subheading reveal" style="max-width: 600px;">
              قطار المشاعر المقدسة هو خط سكة حديدية يربط مكة المكرمة بالمشاعر المقدسة وهي
            </h3>
          </div>
          <p class="section-text mx-auto text-center reveal" style="max-width: 700px;"> 
            قطار المشاعر المقدسة هو خط سكة حديدية يربط مكة المكرمة بالمشاعر المقدسة وهي: منى، وعرفات، ومزدلفة. ويتكون المشروع من 17 قطارًا، تضم 204 عربة، وتستوعب كل عربة منهم 300 راكب، وهناك عربتان أمامية وخلفية للقيادة. ويبلغ طول المسار نحو 18.1 كم، ويرتفع بنحو 8-10 أمتار عن سطح الأرض، ويصل إلى 45 مترًا عند منشأة الجمرات، وتبلغ طاقته الاستيعابية 72,000 شخص في الساعة الواحدة. ويحتوي المشروع على تسعة محطات، بطول 300 متر لكل محطة، تبدأ من مكة المكرمة، ثم يمر القطار بثلاث محطات في مشعر عرفات، وثلاثة في مشعر مزدلفة، ثم محطة في بداية مشعر منى، وأخرى وسطه، وتكون المحطة الأخيرة عند الدور الرابع بجسر الجمرات.
          </p>
        </div>
        <v-row class="gallery-imgs reveal" justify="center">
          <v-col cols="12" sm="5" md="3">
            <v-img height="425" class="gallery-img" src="/imgs/img1.png"></v-img>
          </v-col>
          <v-col cols="12" sm="7" lg="6">
            <v-row>
              <v-col cols="12">
                <v-img height="200" class="gallery-img" src="/imgs/img2.png"></v-img>
              </v-col>
              <v-col cols="12" md="6" lg="7">
                <v-img height="200" class="gallery-img" src="/imgs/img3.png"></v-img>
              </v-col>
              <v-col cols="12" md="6" lg="5">
                <v-img height="200" class="gallery-img" src="/imgs/img4.png"></v-img>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="apply-now py-16">
      <v-container class="main-page-container apply-now__content py-10">
        <img class="shape d-none d-sm-inline-block" src="/imgs/shape.png" alt="shape" />
        <div class="d-flex flex-column align-center mb-4">
          <h2 class="section-heading font-weight-bold reveal" style="max-width: 600px;">
            التقديم الآن للوظائف الموسمية
          </h2>
          <p class="section-text mb-6 text-center reveal" style="max-width: 625px;">
            التقديم للوظائف الموسمية لإدارة الحشود بقطار المشاعر المقدسة لموسم حج 1444 ه كل ما عليك فعله هو ملئ استمارة التسجيل عبر الضغط على زر التقديم الآن بالأسفل
          </p>
          <v-btn link href="https://google.com" depressed color="accent"
          class="hero-btn py-3 px-6 reveal">
              <div class="d-flex align-center gap-sm font-weight-bold white--text">
              <span>التقديم الأن</span>
              <v-icon>mdi-arrow-left-thin</v-icon>
              </div>
          </v-btn>
        </div>
        </v-container>
    </section>

    <footer>
      <v-container class="main-page-container">
        <div class="d-flex align-center justify-center gap mb-3">
          <img style="max-width: 125px;" src="/imgs/logo1.svg" />
          <img style="max-width: 100px;" src="/imgs/al-yamama-logo.svg" />
        </div>
        <p class="py-4 text-center">جميع الحقوق محفوظة © 2023 </p>
      </v-container>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'VendorHomePage',
  layout: 'home',
  mounted() {
    if(this.$isDark()) {
      this.$vuetify.theme.dark = 'light';
      localStorage.setItem("app_dark_theme", 'light');
    }
  }
}
</script>
<style>
.header-container {
  min-height: 100vh;
}
</style>
