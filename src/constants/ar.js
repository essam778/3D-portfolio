import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    threejs,
    web_development,
    Robotics,
    ESP32,
    Arduino,
    Smart_Car_Project,
    Gemini_with_ESP32,
    Courses_Platform,
    portfolio_2d,
    Smat_wheather,
    Smart_Home,
    portfolio_3d,
    Ahmed_Alaa,
} from "../assets";

export const ar = {
    navLinks: [
        {
            id: "about",
            title: "عني",
        },
        {
            id: "work",
            title: "الخبرات",
        },
        {
            id: "skills",
            title: "تكنولوجيا",
        },
        {
            id: "contact",
            title: "تواصل",
        },
    ],
    services: [
        {
            title: "مطور ويب",
            icon: web_development,
        },
        {
            title: "أنظمة مدمجة",
            icon: Arduino,
        },
        {
            title: "حلول إنترنت الأشياء",
            icon: ESP32,
        },
        {
            title: "مهندس روبوتات",
            icon: Robotics,
        },
    ],
    technologies: [
        {
            name: "React JS",
            icon: reactjs,
        },
        {
            name: "Tailwind CSS",
            icon: tailwind,
        },
        {
            name: "Three JS",
            icon: threejs,
        },
        {
            name: "JavaScript",
            icon: javascript,
        },
        {
            name: "Node JS",
            icon: nodejs,
        },
        {
            name: "HTML 5",
            icon: html,
        },
        {
            name: "CSS 3",
            icon: css,
        },
        {
            name: "git",
            icon: git,
        },
    ],
    experiences: [
        {
            title: "مطور واجهات أمامية مستقل",
            company_name: "عمل حر",
            iconBg: "#0188E3",
            date: "يناير 2023 - الآن",
            points: [
                "بناء تطبيقات ويب متجاوبة وتفاعلية باستخدام React.js و Tailwind CSS و GSAP.",
                "تطوير ونشر صفحات هبوط حديثة ومواقع شخصية للعملاء.",
                "ربط واجهات برمجة التطبيقات (APIs) ومعالجة التحقق من صحة النماذج والرسوم المتحركة.",
                "تسليم تصاميم واجهات دقيقة بالبيكسل بناءً على تصاميم Figma و Adobe XD.",
            ],
        },
        {
            title: "متدرب تطوير Full Stack",
            company_name: "مدرسة شيريانز للبرمجة",
            iconBg: "#ffff",
            date: "أغسطس 2023 - مارس 2025",
            points: [
                "إكمال برنامج تدريبي مكثف يركز على تطوير مكدس MERN.",
                "بناء مشاريع متعددة كاملة، بما في ذلك تطبيقات CRUD وأنظمة المصادقة.",
                "العمل مع أدوات مثل Node.js و Express.js و MongoDB و React.js و Git.",
                "اكتساب خبرة عملية في نشر التطبيقات واتباع ممارسات الكود النظيف.",
            ],
        },
    ],
    testimonials: [
        {
            testimonial:
                "كنت أعتقد أنه من المستحيل عمل موقع بهذا الجمال، لكن عصام أثبت عكس ذلك.",
            name: "سارة لي",
            designation: "المدير المالي",
            company: "شركة Acme",
            image: "https://randomuser.me/api/portraits/women/4.jpg",
        },
        {
            testimonial:
                "لم أقابل مطورًا يهتم حقًا بنجاح عملائه مثل عصام.",
            name: "كريس براون",
            designation: "مدير العمليات",
            company: "مؤسسة DEF",
            image: "https://randomuser.me/api/portraits/men/5.jpg",
        },
        {
            testimonial:
                "بعد أن قام عصام بتحسين موقعنا، زادت زياراتنا بنسبة 50%. لا يمكننا شكره بما فيه الكفاية!",
            name: "ليسا وانج",
            designation: "المدير التقني",
            company: "شركات 456",
            image: "https://randomuser.me/api/portraits/women/6.jpg",
        },
    ],
    projects: [
        {
            name: "مشروع السيارة الذكية",
            description:
                "مركبة ذاتية القيادة مبنية باستخدام Arduino، تتميز باكتشاف العقبات وتتبع الخطوط وقدرات التحكم اللاسلكي.",
            tags: [
                { name: "arduino", color: "blue-text-gradient" },
                { name: "c++", color: "green-text-gradient" },
                { name: "robotics", color: "pink-text-gradient" },
            ],
            image: Smart_Car_Project,
            source_code_link: "https://github.com/essam778",
            live_website_link: "#",
            category: "robotics",
            details: {
                overview: "تمثل هذه السيارة الذكية أول مشروع روبوتات كبير لي، حيث تجمع بين تصميم الأجهزة وتكامل المستشعرات والبرمجة الذكية. يمكن للمركبة تجنب العقبات وتتبع الخطوط والتحكم فيها لاسلكيًا عبر البلوتوث.",
                techStack: [
                    "المتحكم الدقيق: Arduino Uno R3 للتحكم الرئيسي",
                    "المحركات: محركان DC مع سائق محرك L298N",
                    "المستشعرات: مستشعر الموجات فوق الصوتية HC-SR04 لاكتشاف العقبات",
                    "كشف الخطوط: مصفوفة مستشعرات الأشعة تحت الحمراء لتتبع الخطوط",
                    "الاتصالات: وحدة بلوتوث HC-05 للتحكم اللاسلكي",
                    "الطاقة: حزمة بطارية ليثيوم أيون 18650"
                ],
                features: [
                    "الوضع المستقل: تجنب العقبات باستخدام مستشعرات الموجات فوق الصوتية",
                    "تتبع الخطوط: خوارزميات دقيقة للكشف عن الخطوط",
                    "التحكم اليدوي: التحكم الذكي عبر الهاتف باستخدام البلوتوث",
                    "التحكم في السرعة: تنظيم سرعة المحرك باستخدام PWM"
                ]
            }
        },
        {
            name: "Gemini_with_ESP32",
            description:
                "متحكم ESP32 مدمج مع ذكاء Gemini AI من Google لمعالجة البيانات بذكاء واتخاذ القرارات في الوقت الفعلي.",
            tags: [
                { name: "esp32", color: "blue-text-gradient" },
                { name: "gemini-ai", color: "green-text-gradient" },
                { name: "iot", color: "pink-text-gradient" },
            ],
            image: Gemini_with_ESP32,
            source_code_link: "https://github.com/essam778/ESP32-with-Gemini-AI.git",
            live_website_link: "#",
            category: "ai",
            details: {
                overview: "الجمع بين قوة متحكمات ESP32 وذكاء Gemini AI من Google، لإنشاء نظام إنترنت أشياء ذكي قادر على فهم اللغة الطبيعية واتخاذ القرارات بشكل مستقل.",
                techStack: [
                    "المتحكم الدقيق: ESP32-WROOM-32 مع WiFi وبلوتوث",
                    "تكامل الذكاء الاصطناعي: واجهة برمجة تطبيقات Google Gemini للمعالجة الذكية",
                    "المستشعرات: DHT22 للحرارة/الرطوبة، ومستشعرات غاز MQ",
                    "الشاشة: OLED لتصور البيانات في الوقت الفعلي",
                    "السحابة: Firebase لتخزين البيانات والمراقبة"
                ],
                features: [
                    "اللغة الطبيعية: الأوامر الصوتية والتفاعلات النصية",
                    "التعرف على الأنماط: اكتشاف الشذوذ في بيانات المستشعر",
                    "التحليل التنبئي: التنبؤ بالاتجاهات والتنبيهات الذكية",
                    "التعلم التكيفي: النظام يتحسن مع أنماط الاستخدام"
                ]
            }
        },
        {
            name: "منصة الكورسات",
            description:
                "منصة حديثة ومتجاوبة مصممة للطلاب، تقدم دورات مجانية عبر الإنترنت من مصادر عالية الجودة.",
            tags: [
                { name: "html/css", color: "blue-text-gradient" },
                { name: "odoo", color: "green-text-gradient" },
                { name: "javascript", color: "pink-text-gradient" },
            ],
            image: Courses_Platform,
            source_code_link: "#",
            live_website_link: "https://moral2.odoo.com",
            category: "web",
            details: {
                overview: "منصة شاملة مصممة لطلاب المدارس الثانوية، تقدم دورات مجانية عبر الإنترنت في مختلف المواد مع سهولة التنقل وتتبع تقدم الطلاب.",
                techStack: [
                    "المنصة: Odoo ERP",
                    "الخلفية: Python (إطار عمل Odoo)",
                    "الواجهة الأمامية: HTML, CSS, JavaScript",
                    "قاعدة البيانات: PostgreSQL لتخزين مستقر للبيانات",
                    "الاستضافة: نشر سحابي للوصول على مدار الساعة"
                ],
                features: [
                    "دورات تفاعلية: دروس ممتعة مع وسائط متعددة",
                    "تتبع الدورات: مراقبة تقدم التعلم والإكمال",
                    "وصول مجاني: تعليم عالي الجودة مجانًا",
                    "محسّن للجوال: تجربة سلسة على جميع الأجهزة"
                ]
            }
        },
        {
            name: "portfolio_2d",
            description:
                "موقع معرض أعمال متجاوب مبني بتقنيات ويب حديثة لعرض المشاريع والمهارات كمهندس روبوتات.",
            tags: [
                { name: "tailwind", color: "blue-text-gradient" },
                { name: "javascript", color: "green-text-gradient" },
                { name: "web-dev", color: "pink-text-gradient" },
            ],
            image: portfolio_2d,
            source_code_link: "https://github.com/essam778/Personal-Website.git",
            live_website_link: "https://essam778.github.io/Personal-Website/",
            category: "web",
            details: {
                overview: "موقع معرض أعمالي الشخصي السابق، مصمم لعرض المهارات والمشاريع كمطور ومهندس روبوتات مع التركيز على واجهة مستخدم نظيفة.",
                techStack: [
                    "الواجهة الأمامية: HTML, CSS, JavaScript, Tailwind CSS",
                    "التجاوب: تصميم للهاتف أولاً",
                    "النشر: استضافة آلية عبر GitHub Pages",
                    "التحكم في النسخ: سير عمل Git و GitHub"
                ],
                features: [
                    "واجهة حديثة: واجهة مستخدم نظيفة وتفاعلية",
                    "متجاوب: محسّن للكمبيوتر اللوحي والهاتف",
                    "عرض المشاريع: عرض مصنف للإنجازات",
                    "تصفح سلس: رحلة مستخدم بديهية"
                ]
            }
        },
        {
            name: "Smat_wheather",
            description:
                "نظام مراقبة الطقس القائم على إنترنت الأشياء مع جمع البيانات في الوقت الفعلي والتخزين السحابي والتكامل مع الهاتف المحمول.",
            tags: [
                { name: "esp32", color: "blue-text-gradient" },
                { name: "firebase", color: "green-text-gradient" },
                { name: "sensors", color: "pink-text-gradient" },
            ],
            image: Smat_wheather,
            source_code_link: "https://github.com/essam778/Smart-Weather-Station.git",
            live_website_link: "#",
            category: "embedded",
            details: {
                overview: "نظام مراقبة الطقس القائم على إنترنت الأشياء يجمع البيانات البيئية في الوقت الفعلي ويسمح للمستخدمين بعرضها من خلال تطبيق سحابي.",
                techStack: [
                    "المتحكم الدقيق: ESP32 مع Wi-Fi/Bluetooth",
                    "المستشعرات: DHT22 (حرارة/رطوبة)، BMP180 (ضغط)",
                    "واجهة برمجة التطبيقات السحابية: تخزين بيانات Firebase في الوقت الفعلي",
                    "الاتصالات: بروتوكول MQTT لنقل البيانات",
                    "تطبيق الهاتف: تكامل للمراقبة عن بعد"
                ],
                features: [
                    "مراقبة في الوقت الفعلي: لوحة بيانات بيئية مباشرة",
                    "مزامنة سحابية: تخزين واسترجاع آمن للبيانات",
                    "تنبيهات البيانات: إشعارات فورية للتغييرات",
                    "كفاءة الطاقة: محسّن لاستخدام البطارية طويل الأمد"
                ]
            }
        },
        {
            name: "المنزل الذكي",
            description:
                "نظام أتمتة منزل شامل مع تحكم صوتي وجدولة ومراقبة للطاقة.",
            tags: [
                { name: "arduino", color: "blue-text-gradient" },
                { name: "automation", color: "green-text-gradient" },
                { name: "iot", color: "pink-text-gradient" },
            ],
            image: Smart_Home,
            source_code_link: "https://github.com/essam778",
            live_website_link: "#",
            category: "embedded",
            details: {
                overview: "نظام أتمتة منزل شامل يدمج التحكم الصوتي والجدولة ومراقبة الطاقة باستخدام Arduino و MQTT.",
                techStack: [
                    "المتحكم الدقيق: Arduino Uno مع وحدة Wi-Fi",
                    "التحكم الصوتي: تكامل Google Assistant / Alexa",
                    "الاتصالات: بروتوكول MQTT للتعامل مع الأجهزة",
                    "المستشعرات: مستشعرات الحركة والضوء ودرجة الحرارة",
                    "التطبيق: واجهة هاتف مخصصة للتحكم"
                ],
                features: [
                    "التحكم الصوتي: إدارة الأجهزة بدون استخدام اليدين",
                    "الجدولة الذكية: توقيت تلقائي للأجهزة",
                    "مراقبة الطاقة: تتبع استخدام الطاقة في الوقت الفعلي",
                    "الوصول عن بعد: تحكم في منزلك من أي مكان"
                ]
            }
        },
        {
            name: "portfolio_3d",
            description:
                "موقع معرض أعمال متجاوب مبني بتقنيات ويب حديثة لعرض المشاريع والمهارات كمهندس روبوتات.",
            tags: [
                { name: "tailwind", color: "blue-text-gradient" },
                { name: "javascript", color: "green-text-gradient" },
                { name: "web-dev", color: "pink-text-gradient" },
            ],
            image: portfolio_3d,
            source_code_link: "https://github.com/essam778/Personal-Website.git",
            live_website_link: "https://essam778.github.io/Personal-Website/",
            category: "web",
            details: {
                overview: "موقع معرض أعمالي الشخصي السابق، مصمم لعرض المهارات والمشاريع كمطور ومهندس روبوتات مع التركيز على واجهة مستخدم نظيفة.",
                techStack: [
                    "الواجهة الأمامية: HTML, CSS, JavaScript, Tailwind CSS",
                    "التجاوب: تصميم للهاتف أولاً",
                    "النشر: استضافة آلية عبر GitHub Pages",
                    "التحكم في النسخ: سير عمل Git و GitHub"
                ],
                features: [
                    "واجهة حديثة: واجهة مستخدم نظيفة وتفاعلية",
                    "متجاوب: محسّن للكمبيوتر اللوحي والهاتف",
                    "عرض المشاريع: عرض مصنف للإنجازات",
                    "تصفح سلس: رحلة مستخدم بديهية"
                ]
            }
        },
        {
            name: "أحمد علاء",
            description:
                "موقع معرض أعمال متجاوب مبني بتقنيات ويب حديثة لعرض المشاريع والمهارات كمهندس روبوتات.",
            tags: [
                { name: "tailwind", color: "blue-text-gradient" },
                { name: "javascript", color: "green-text-gradient" },
                { name: "web-dev", color: "pink-text-gradient" },
            ],
            image: Ahmed_Alaa,
            source_code_link: "https://github.com/essam778/Personal-Website.git",
            live_website_link: "https://essam778.github.io/Personal-Website/",
            category: "web",
            details: {
                overview: "موقع معرض أعمالي الشخصي السابق، مصمم لعرض المهارات والمشاريع كمطور ومهندس روبوتات مع التركيز على واجهة مستخدم نظيفة.",
                techStack: [
                    "الواجهة الأمامية: HTML, CSS, JavaScript, Tailwind CSS",
                    "التجاوب: تصميم للهاتف أولاً",
                    "النشر: استضافة آلية عبر GitHub Pages",
                    "التحكم في النسخ: سير عمل Git و GitHub"
                ],
                features: [
                    "واجهة حديثة: واجهة مستخدم نظيفة وتفاعلية",
                    "متجاوب: محسّن للكمبيوتر اللوحي والهاتف",
                    "عرض المشاريع: عرض مصنف للإنجازات",
                    "تصفح سلس: رحلة مستخدم بديهية"
                ]
            }
        },
    ],
    socialLinks: [
        {
            name: "GitHub",
            url: "https://github.com/essam778",
            color: "#181717",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/essam-hisham-728bb4395/",
            color: "#0077B5",
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/essamhisham77/",
            color: "#E4405F",
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/profile.php?id=100044822680777",
            color: "#1877F2",
        },
    ],
    ui: {
        hero: {
            headText: "أهلاً، أنا",
            subText: [
                "أقوم بتطوير واجهات ثلاثية الأبعاد،",
                "واجهات المستخدم وتطبيقات الويب",
            ],
            typewriterWords: ["إنترنت الأشياء", "روبوتات", "أردوينو ESP32", "تطوير الويب"]
        },
        about: {
            subText: "مقدمة",
            headText: "نظرة عامة.",
            description: "أهلاً! أنا عصام هشام، مطور ومهندس روبوتات عمري 17 عامًا من مصر. بدأت رحلتي في عالم التكنولوجيا في سن الرابعة عشرة عندما اكتشفت البرمجة لأول مرة، ومنذ ذلك الحين وأنا شغوف بها.\n\nحاليًا في السنة النهائية من المدرسة الثانوية (الصف 12)، قمت ببناء أساس قوي في تطوير البرمجيات والروبوتات والأنظمة المدمجة. أحب حل المشكلات المعقدة وإنشاء حلول مبتكرة تسد الفجوة بين الأجهزة والبرمجيات.\n\nيكمن شغفي في بناء مشاريع واقعية تحدث فرقًا. من السيارات الذكية ذاتية القيادة إلى الأنظمة المدمجة المدعومة بالذكاء الاصطناعي، أستكشف دائمًا تقنيات جديدة وأدفع حدود ما هو ممكن."
        },
        experience: {
            subText: "ما قمت به حتى الآن",
            headText: "الخبرة العملية."
        },
        tech: {
            subText: "ما أستخدمه",
            headText: "التقنيات."
        },
        works: {
            subText: "أعمالي",
            headText: "المشاريع.",
            description: "المشاريع التالية تعرض مهاراتي وخبرتي من خلال أمثلة واقعية. يتم وصف كل مشروع باختصار مع روابط لمستودعات الأكواد والعروض الحية. تعكس قدرتي على حل المشكلات المعقدة والعمل بتقنيات مختلفة وإدارة المشاريع بفعالية.",
            categories: {
                all: "كل المشاريع",
                robotics: "روبوتات",
                embedded: "أنظمة مدمجة",
                ai: "ذكاء اصطناعي",
                web: "تطوير ويب"
            }
        },
        contact: {
            subText: "تواصل معنا",
            headText: "اتصل بي.",
            form: {
                name: "اسمك",
                namePlaceholder: "ما هو اسمك الكريم؟",
                email: "بريدك الإلكتروني",
                emailPlaceholder: "ما هو عنوان بريدك الإلكتروني؟",
                message: "رسالتك",
                messagePlaceholder: "ماذا تريد أن تقول؟",
                send: "إرسال",
                sending: "جاري الإرسال..."
            },
            infoTitle: "معلومات التواصل",
            quickNoteTitle: "ملاحظة سريعة",
            quickNoteText: "سواء كان لديك سؤال حول مشاريعي في الروبوتات، أو ترغب في التعاون، أو مجرد إلقاء التحية، صندوق الوارد الخاص بي مفتوح دائمًا. سأرد عليك في أقرب وقت ممكن!",
            connectTitle: "تواصل معي",
            infoItems: {
                email: "البريد الإلكتروني",
                phone: "الهاتف",
                location: "الموقع",
                availability: "الحالة",
                availabilityValue: "متاح لفرص جديدة"
            }
        }
    }
};
