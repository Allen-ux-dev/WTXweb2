// 翻译字典
        const translations = {
            'zh': {
                'welcome': '欢迎来到我的个人网页',
                'tagline': 'Think different-非同凡想(此网页处于工程状态非成品)',
                'contactMe': '联系我',
                'skills': '专业技能',
                'frontend': '前端开发',
                'frontendDesc': '会使用html和现代前端框架来制作简洁明了的网页。',
                'uiux': 'UI/UX设计',
                'uiuxDesc': '注重用户体验和界面设计，创建直观美观的设计方案。',
                'media': '媒体开发',
                'mediaDesc': '具有多媒体创作经验，确保一致的观感体验(如达芬奇)。',
                'projects': '项目经验',
                'collaboration': '关于合作',
                'collaborationDesc': '擅长模块化合作将时间减少了40%，并提高了用户参与度。',
                'uiDesign': 'UI设计',
                'uiDesignDesc': '具有直观的用户界面和个性化推荐功能。',
                'viewDetails': '查看详情',
                'about': '关于我',
                'aboutDesc1': '我是一名多媒体与网页和UI计师，我专注于创建直观、美观且功能强大的体验。(额...我虽然只是一位同学，但是看过我做的都知道)',
                'aboutDesc2': '我会注重细节、持续学习并与他人紧密合作，以确保作品不仅满足而且超出期望。',
                'learnMore': '了解更多',
                'contact': '与我联系',
                'contactDesc': '如果您有项目想法或合作机会，请随时与我联系。我期待与您讨论如何将您的愿景变为现实。',
                'sendEmail': '发送邮件',
                'events': '事件',
                'syncTranslation': '同步翻译内容',
                'login': '登录',
                'username': '用户名',
                'password': '密码',
                'noAccount': '没有账户？',
                'register': '注册',
                'confirmPassword': '确认密码',
                'hasAccount': '已有账户？',
                'editProfile': '编辑资料',
                'logout': '退出登录',
                'rights': '保留所有权利。',
                'socialMedia': '社交媒体',
                'settings': '网站设置',
                'theme': '主题',
                'light': '浅色',
                'dark': '深色',
                'cyan': '青色',
                'fontSize': '字体大小',
                'small': '小',
                'medium': '中',
                'large': '大',
                'animations': '动画效果',
                'smoothScroll': '平滑滚动',
                'hoverEffects': '悬停效果',
                'reset': '重置为默认设置',
                'home': '首页',
                'history': '历史',
                'navSkills': '专业技能',
                'navProjects': '项目经验',
                'navAbout': '关于我',
                'navContact': '联系方式',
                'mobileSettings': '网站设置',
                'clickSpark': '点击火花效果',
                'eventsTitle': '事件',
                'eventsIntro': '这里展示网站与项目的重要事件。数据由 js/data.js 或管理页生成。',
                'historyTitle': '历史',
                'historyIntro': '这里展示项目成长记录和历史节点。',
                'footerTagline': '苹果风格个人网页 · 模块化版本',
                'pages': '页面',
                'adminShort': '管理',
                'adminPageTitle': '管理事件与历史',
                'adminSubtitle': '无数据库版本：添加后会写入浏览器 localStorage，并可生成独立的事件/历史 HTML、CSS、JS 源码。',
                'addEvent': '添加事件',
                'addHistory': '添加历史',
                'eventTitlePlaceholder': '事件标题',
                'eventDescPlaceholder': '事件描述',
                'historyTitlePlaceholder': '历史标题',
                'historyDescPlaceholder': '历史描述',
                'imageUrlOptional': '图片 URL，可不填',
                'generateStandaloneSource': '生成独立源码',
                'generateSourceDesc': '点击后会生成只属于“事件与历史”的四个文件源码：events.html、history.html、css/event-history.css、js/event-history-data.js。',
                'generateEventHistorySource': '生成事件/历史源码',
                'previewEvents': '预览事件页',
                'previewHistory': '预览历史页',
                'sourceModalTitle': '事件/历史独立源码',
                'sourceModalNote': '选择文件标签后复制；也可以下载合并 txt。',
                'close': '关闭',
                'sourceReplaceNote': '替换对应文件即可更新独立事件/历史模块。',
                'copyCurrentFile': '复制当前文件',
                'downloadMergedSource': '下载合并源码',
                'eventsPageTitle': '事件 - WTX',
                'historyPageTitle': '历史 - WTX',
                'adminBrowserTitle': '管理事件与历史 - WTX'
            },
            'en': {
                'welcome': 'Welcome to My Personal Website',
                'tagline': 'Think different - Extraordinary thinking (This webpage is under construction)',
                'contactMe': 'Contact Me',
                'skills': 'Professional Skills',
                'frontend': 'Frontend Development',
                'frontendDesc': 'Proficient in HTML and modern frontend frameworks to create clean and intuitive web pages.',
                'uiux': 'UI/UX Design',
                'uiuxDesc': 'Focus on user experience and interface design, creating intuitive and aesthetically pleasing design solutions.',
                'media': 'Media Development',
                'mediaDesc': 'Experienced in multimedia creation, ensuring consistent visual experiences (e.g., DaVinci Resolve).',
                'projects': 'Project Experience',
                'collaboration': 'About Collaboration',
                'collaborationDesc': 'Skilled in modular collaboration, reducing time by 40% and improving user engagement.',
                'uiDesign': 'UI Design',
                'uiDesignDesc': 'Features intuitive user interfaces and personalized recommendation functions.',
                'viewDetails': 'View Details',
                'about': 'About Me',
                'aboutDesc1': 'I am a multimedia, web, and UI designer focused on creating intuitive, beautiful, and powerful experiences. (Well... I may just be a student, but those who have seen my work know)',
                'aboutDesc2': 'I pay attention to details, continuously learn, and work closely with others to ensure that my work not only meets but exceeds expectations.',
                'learnMore': 'Learn More',
                'contact': 'Contact Me',
                'contactDesc': 'If you have project ideas or collaboration opportunities, feel free to contact me. I look forward to discussing how to turn your vision into reality.',
                'sendEmail': 'Send Email',
                'events': 'Events',
                'syncTranslation': 'Synchronize Translations',
                'login': 'Login',
                'username': 'Username',
                'password': 'Password',
                'noAccount': 'No account?',
                'register': 'Register',
                'confirmPassword': 'Confirm Password',
                'hasAccount': 'Already have an account?',
                'editProfile': 'Edit Profile',
                'logout': 'Logout',
                'rights': 'All rights reserved.',
                'socialMedia': 'Social Media',
                'settings': 'Website Settings',
                'theme': 'Theme',
                'light': 'Light',
                'dark': 'Dark',
                'cyan': 'Cyan',
                'fontSize': 'Font Size',
                'small': 'Small',
                'medium': 'Medium',
                'large': 'Large',
                'animations': 'Animations',
                'smoothScroll': 'Smooth Scroll',
                'hoverEffects': 'Hover Effects',
                'reset': 'Reset to Default Settings',
                'home': 'Home',
                'history': 'History',
                'navSkills': 'Skills',
                'navProjects': 'Projects',
                'navAbout': 'About',
                'navContact': 'Contact',
                'mobileSettings': 'Website Settings',
                'clickSpark': 'Click Spark',
                'eventsTitle': 'Events',
                'eventsIntro': 'Important events from the website and projects. Data comes from js/data.js or the admin page.',
                'historyTitle': 'History',
                'historyIntro': 'Project growth records and milestone history.',
                'footerTagline': 'Apple-style personal website · Modular version',
                'pages': 'Pages',
                'adminShort': 'Admin',
                'adminPageTitle': 'Manage Events and History',
                'adminSubtitle': 'Database-free version: items are saved to browser localStorage and can generate standalone event/history HTML, CSS, and JS source.',
                'addEvent': 'Add Event',
                'addHistory': 'Add History',
                'eventTitlePlaceholder': 'Event title',
                'eventDescPlaceholder': 'Event description',
                'historyTitlePlaceholder': 'History title',
                'historyDescPlaceholder': 'History description',
                'imageUrlOptional': 'Image URL, optional',
                'generateStandaloneSource': 'Generate Standalone Source',
                'generateSourceDesc': 'Generate four source files for events and history: events.html, history.html, css/event-history.css, js/event-history-data.js.',
                'generateEventHistorySource': 'Generate Event/History Source',
                'previewEvents': 'Preview Events',
                'previewHistory': 'Preview History',
                'sourceModalTitle': 'Standalone Event/History Source',
                'sourceModalNote': 'Choose a file tab and copy it, or download a combined txt file.',
                'close': 'Close',
                'sourceReplaceNote': 'Replace the matching files to update the standalone event/history module.',
                'copyCurrentFile': 'Copy Current File',
                'downloadMergedSource': 'Download Merged Source',
                'eventsPageTitle': 'Events - WTX',
                'historyPageTitle': 'History - WTX',
                'adminBrowserTitle': 'Manage Events and History - WTX'
            },
            'fr': {
                'welcome': 'Bienvenue sur mon site personnel',
                'tagline': 'Pensez différemment - Pensée extraordinaire (Ce site web est en construction)',
                'contactMe': 'Contactez-moi',
                'skills': 'Compétences professionnelles',
                'frontend': 'Développement Frontend',
                'frontendDesc': 'Maîtrise du HTML et des frameworks frontend modernes pour créer des pages web claires et intuitives.',
                'uiux': 'Conception UI/UX',
                'uiuxDesc': 'Se concentre sur l\'expérience utilisateur et la conception d\'interface, créant des solutions de design intuitives et esthétiques.',
                'media': 'Développement Média',
                'mediaDesc': 'Expérience en création multimédia, assurant des expériences visuelles cohérentes (ex: DaVinci Resolve).',
                'projects': 'Expérience de projet',
                'collaboration': 'À propos de la collaboration',
                'collaborationDesc': 'Compétent en collaboration modulaire, réduisant le temps de 40% et améliorant l\'engagement des utilisateurs.',
                'uiDesign': 'Conception UI',
                'uiDesignDesc': 'Comprend des interfaces utilisateur intuitives et des fonctions de recommandation personnalisées.',
                'viewDetails': 'Voir les détails',
                'about': 'À propos de moi',
                'aboutDesc1': 'Je suis un designer multimédia, web et UI, spécialisé dans la création d\'expériences intuitives, belles et puissantes. (Eh bien... je ne suis peut-être qu\'un étudiant, mais ceux qui ont vu mon travail savent)',
                'aboutDesc2': 'Je prête attention aux détails, j\'apprends continuellement et je travaille en étroite collaboration avec les autres pour m\'assurer que mon travail dépasse les attentes.',
                'learnMore': 'En savoir plus',
                'contact': 'Contactez-moi',
                'contactDesc': 'Si vous avez des idées de projet ou des opportunités de collaboration, n\'hésitez pas à me contacter. J\'ai hâte de discuter de la façon de transformer votre vision en réalité.',
                'sendEmail': 'Envoyer un email',
                'events': 'Événements',
                'syncTranslation': 'Synchroniser les traductions',
                'login': 'Connexion',
                'username': 'Nom d\'utilisateur',
                'password': 'Mot de passe',
                'noAccount': 'Pas de compte?',
                'register': 'S\'inscrire',
                'confirmPassword': 'Confirmer le mot de passe',
                'hasAccount': 'Vous avez déjà un compte?',
                'editProfile': 'Modifier le profil',
                'logout': 'Se déconnecter',
                'rights': 'Tous droits réservés.',
                'socialMedia': 'Médias sociaux',
                'settings': 'Paramètres du site',
                'theme': 'Thème',
                'light': 'Clair',
                'dark': 'Sombre',
                'cyan': 'Cyan',
                'fontSize': 'Taille de police',
                'small': 'Petit',
                'medium': 'Moyen',
                'large': 'Grand',
                'animations': 'Animations',
                'smoothScroll': 'Défilement fluide',
                'hoverEffects': 'Effets de survol',
                'reset': 'Réinitialiser les paramètres',
                'home': 'Accueil',
                'history': 'Historique',
                'navSkills': 'Compétences',
                'navProjects': 'Projets',
                'navAbout': 'À propos',
                'navContact': 'Contact',
                'mobileSettings': 'Paramètres du site',
                'clickSpark': 'Étincelles au clic',
                'eventsTitle': 'Événements',
                'eventsIntro': 'Événements importants du site et des projets. Les données viennent de js/data.js ou de la page d’administration.',
                'historyTitle': 'Historique',
                'historyIntro': 'Chronologie de croissance du projet et jalons.',
                'footerTagline': 'Site personnel style Apple · Version modulaire',
                'pages': 'Pages',
                'adminShort': 'Admin',
                'adminPageTitle': 'Gérer les événements et l’historique',
                'adminSubtitle': 'Version sans base de données : les éléments sont enregistrés dans localStorage et peuvent générer le code HTML, CSS et JS autonome.',
                'addEvent': 'Ajouter un événement',
                'addHistory': 'Ajouter un historique',
                'eventTitlePlaceholder': 'Titre de l’événement',
                'eventDescPlaceholder': 'Description de l’événement',
                'historyTitlePlaceholder': 'Titre historique',
                'historyDescPlaceholder': 'Description historique',
                'imageUrlOptional': 'URL de l’image, facultative',
                'generateStandaloneSource': 'Générer le code autonome',
                'generateSourceDesc': 'Génère quatre fichiers source pour les événements et l’historique : events.html, history.html, css/event-history.css, js/event-history-data.js.',
                'generateEventHistorySource': 'Générer événement/historique',
                'previewEvents': 'Aperçu événements',
                'previewHistory': 'Aperçu historique',
                'sourceModalTitle': 'Code autonome événement/historique',
                'sourceModalNote': 'Choisissez un onglet de fichier puis copiez, ou téléchargez un txt combiné.',
                'close': 'Fermer',
                'sourceReplaceNote': 'Remplacez les fichiers correspondants pour mettre à jour le module autonome.',
                'copyCurrentFile': 'Copier le fichier actuel',
                'downloadMergedSource': 'Télécharger le code combiné',
                'eventsPageTitle': 'Événements - WTX',
                'historyPageTitle': 'Historique - WTX',
                'adminBrowserTitle': 'Gérer les événements et l’historique - WTX'
            }
        };

        // 应用翻译
        function applyTranslations(lang) {
            const elements = document.querySelectorAll('[data-i18n]');
            elements.forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[lang] && translations[lang][key]) {
                    element.textContent = translations[lang][key];
                }
            });

            document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
                const key = element.getAttribute('data-i18n-placeholder');
                if (translations[lang] && translations[lang][key]) {
                    element.setAttribute('placeholder', translations[lang][key]);
                }
            });

            const titleKey = document.body && document.body.getAttribute('data-i18n-title');
            if (titleKey && translations[lang] && translations[lang][titleKey]) {
                document.title = translations[lang][titleKey];
            }
            
            // 更新当前语言显示
            const currentLanguageElements = document.querySelectorAll('#currentLanguage, #mobileCurrentLanguage');
            currentLanguageElements.forEach(element => {
                if (lang === 'zh') element.textContent = '中文';
                else if (lang === 'en') element.textContent = 'English';
                else if (lang === 'fr') element.textContent = 'Français';
            });
            
            // 更新HTML lang属性
            document.documentElement.lang = lang;
        }

        // 初始化翻译功能
        document.addEventListener('DOMContentLoaded', function() {
            // 从本地存储获取语言设置或使用默认语言
            let currentLanguage = localStorage.getItem('language') || 'zh';
            
            // 应用初始语言
            applyTranslations(currentLanguage);

            document.querySelectorAll('[data-theme-toggle]').forEach(button => {
                button.addEventListener('click', () => {
                    const currentTheme = localStorage.getItem('theme') || 'light';
                    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
                    applyTheme(nextTheme);
                    localStorage.setItem('theme', nextTheme);
                });
            });

            const legacyMenuBtn = document.querySelector('[data-mobile-menu-btn]');
            const legacyMenu = document.querySelector('[data-mobile-menu]');
            if (legacyMenuBtn && legacyMenu) {
                legacyMenuBtn.addEventListener('click', () => legacyMenu.classList.toggle('active'));
                legacyMenu.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => legacyMenu.classList.remove('active'));
                });
            }
            
            // 语言切换器功能
            document.querySelectorAll('.language-option').forEach(option => {
                option.addEventListener('click', function() {
                    const lang = this.getAttribute('data-lang');
                    localStorage.setItem('language', lang);
                    applyTranslations(lang);
                    
                    // 关闭语言选项菜单
                    document.querySelectorAll('.language-options').forEach(menu => {
                        menu.classList.remove('active');
                    });
                });
            });
            
            // 切换语言选项菜单显示
            document.querySelectorAll('.language-switcher').forEach(switcher => {
                switcher.addEventListener('click', function() {
                    const options = this.querySelector('.language-options');
                    options.classList.toggle('active');
                });
            });
            
            // 点击页面其他地方关闭语言选项菜单
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.language-switcher')) {
                    document.querySelectorAll('.language-options').forEach(menu => {
                        menu.classList.remove('active');
                    });
                }
            });
            
            // 同步翻译按钮功能
            const syncTranslationBtn = document.getElementById('syncTranslationBtn');
            if (syncTranslationBtn) {
                syncTranslationBtn.addEventListener('click', function() {
                    const currentLanguage = localStorage.getItem('language') || 'zh';
                    applyTranslations(currentLanguage);
                    alert('翻译内容已同步！');
                });
            }
        });

        // ============================================
        // ASCII文字效果初始化
        // ============================================
        (function() {
            // 检查Three.js是否已加载
            if (typeof THREE === 'undefined') {
                console.error('Three.js is not loaded. Please make sure Three.js is included.');
                return;
            }
            
            // 等待页面完全加载
            window.addEventListener('load', function() {
                // 延迟初始化，确保所有资源已加载
                setTimeout(initASCIIText, 1000);
            });
            
            function initASCIIText() {
                const container = document.getElementById('ascii-hello-container');
                if (!container) {
                    console.error('ASCII container not found');
                    return;
                }
                
                // 创建ASCII效果
                try {
                    // 首先添加map方法到Math对象（如果不存在）
                    if (!Math.map) {
                        Math.map = function(n, start, stop, start2, stop2) {
                            return ((n - start) / (stop - start)) * (stop2 - start2) + start2;
                        };
                    }
                    
                    const PX_RATIO = typeof window !== 'undefined' ? window.devicePixelRatio : 1;
                    
                    // AsciiFilter类
                    class AsciiFilter {
                        constructor(renderer, { fontSize, fontFamily, charset, invert } = {}) {
                            this.renderer = renderer;
                            this.domElement = document.createElement('div');
                            this.domElement.style.position = 'absolute';
                            this.domElement.style.top = '0';
                            this.domElement.style.left = '0';
                            this.domElement.style.width = '100%';
                            this.domElement.style.height = '100%';
                            
                            this.pre = document.createElement('pre');
                            this.domElement.appendChild(this.pre);
                            
                            this.canvas = document.createElement('canvas');
                            this.context = this.canvas.getContext('2d');
                            this.domElement.appendChild(this.canvas);
                            
                            this.deg = 0;
                            this.invert = invert ?? true;
                            this.fontSize = fontSize ?? 12;
                            this.fontFamily = fontFamily ?? "'Courier New', monospace";
                            this.charset = charset ?? ' .\'`^",:;Il!i~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$';
                            
                            this.context.webkitImageSmoothingEnabled = false;
                            this.context.mozImageSmoothingEnabled = false;
                            this.context.msImageSmoothingEnabled = false;
                            this.context.imageSmoothingEnabled = false;
                            
                            this.onMouseMove = this.onMouseMove.bind(this);
                            document.addEventListener('mousemove', this.onMouseMove);
                        }
                        
                        setSize(width, height) {
                            this.width = width;
                            this.height = height;
                            this.renderer.setSize(width, height);
                            this.reset();
                            
                            this.center = { x: width / 2, y: height / 2 };
                            this.mouse = { x: this.center.x, y: this.center.y };
                        }
                        
                        reset() {
                            this.context.font = `${this.fontSize}px ${this.fontFamily}`;
                            const charWidth = this.context.measureText('A').width;
                            
                            this.cols = Math.floor(this.width / (this.fontSize * (charWidth / this.fontSize)));
                            this.rows = Math.floor(this.height / this.fontSize);
                            
                            this.canvas.width = this.cols;
                            this.canvas.height = this.rows;
                            this.pre.style.fontFamily = this.fontFamily;
                            this.pre.style.fontSize = `${this.fontSize}px`;
                            this.pre.style.margin = '0';
                            this.pre.style.padding = '0';
                            this.pre.style.lineHeight = '1em';
                            this.pre.style.position = 'absolute';
                            this.pre.style.left = '50%';
                            this.pre.style.top = '50%';
                            this.pre.style.transform = 'translate(-50%, -50%)';
                            this.pre.style.zIndex = '9';
                            this.pre.style.backgroundAttachment = 'fixed';
                            this.pre.style.mixBlendMode = 'difference';
                        }
                        
                        render(scene, camera) {
                            this.renderer.render(scene, camera);
                            
                            const w = this.canvas.width;
                            const h = this.canvas.height;
                            this.context.clearRect(0, 0, w, h);
                            if (this.context && w && h) {
                                this.context.drawImage(this.renderer.domElement, 0, 0, w, h);
                            }
                            
                            this.asciify(this.context, w, h);
                            this.hue();
                        }
                        
                        onMouseMove(e) {
                            this.mouse = { x: e.clientX * PX_RATIO, y: e.clientY * PX_RATIO };
                        }
                        
                        get dx() {
                            return this.mouse.x - this.center.x;
                        }
                        
                        get dy() {
                            return this.mouse.y - this.center.y;
                        }
                        
                        hue() {
                            const deg = (Math.atan2(this.dy, this.dx) * 180) / Math.PI;
                            this.deg += (deg - this.deg) * 0.075;
                            this.domElement.style.filter = `hue-rotate(${this.deg.toFixed(1)}deg)`;
                        }
                        
                        asciify(ctx, w, h) {
                            if (w && h) {
                                const imgData = ctx.getImageData(0, 0, w, h).data;
                                let str = '';
                                for (let y = 0; y < h; y++) {
                                    for (let x = 0; x < w; x++) {
                                        const i = x * 4 + y * 4 * w;
                                        const [r, g, b, a] = [imgData[i], imgData[i + 1], imgData[i + 2], imgData[i + 3]];
                                        
                                        if (a === 0) {
                                            str += ' ';
                                            continue;
                                        }
                                        
                                        let gray = (0.3 * r + 0.6 * g + 0.1 * b) / 255;
                                        let idx = Math.floor((1 - gray) * (this.charset.length - 1));
                                        if (this.invert) idx = this.charset.length - idx - 1;
                                        str += this.charset[idx];
                                    }
                                    str += '\n';
                                }
                                this.pre.innerHTML = str;
                            }
                        }
                        
                        dispose() {
                            document.removeEventListener('mousemove', this.onMouseMove);
                        }
                    }
                    
                    // CanvasTxt类
                    class CanvasTxt {
                        constructor(txt, { fontSize = 200, fontFamily = 'Arial', color = '#fdf9f3' } = {}) {
                            this.canvas = document.createElement('canvas');
                            this.context = this.canvas.getContext('2d');
                            this.txt = txt;
                            this.fontSize = fontSize;
                            this.fontFamily = fontFamily;
                            this.color = color;
                            
                            this.font = `600 ${this.fontSize}px ${this.fontFamily}`;
                        }
                        
                        resize() {
                            this.context.font = this.font;
                            const metrics = this.context.measureText(this.txt);
                            
                            const textWidth = Math.ceil(metrics.width) + 20;
                            const textHeight = Math.ceil(metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent) + 20;
                            
                            this.canvas.width = textWidth;
                            this.canvas.height = textHeight;
                        }
                        
                        render() {
                            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                            this.context.fillStyle = this.color;
                            this.context.font = this.font;
                            
                            const metrics = this.context.measureText(this.txt);
                            const yPos = 10 + metrics.actualBoundingBoxAscent;
                            
                            this.context.fillText(this.txt, 10, yPos);
                        }
                        
                        get width() {
                            return this.canvas.width;
                        }
                        
                        get height() {
                            return this.canvas.height;
                        }
                        
                        get texture() {
                            return this.canvas;
                        }
                    }
                    
                    // CanvAscii类 - 主类
                    class CanvAscii {
                        constructor(config, containerElem, width, height) {
                            this.textString = config.text;
                            this.asciiFontSize = config.asciiFontSize;
                            this.textFontSize = config.textFontSize;
                            this.textColor = config.textColor;
                            this.planeBaseHeight = config.planeBaseHeight;
                            this.container = containerElem;
                            this.width = width;
                            this.height = height;
                            this.enableWaves = config.enableWaves;
                            
                            this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 1000);
                            this.camera.position.z = 30;
                            
                            this.scene = new THREE.Scene();
                            this.mouse = { x: 0, y: 0 };
                            
                            this.onMouseMove = this.onMouseMove.bind(this);
                            
                            this.setMesh();
                            this.setRenderer();
                        }
                        
                        setMesh() {
                            this.textCanvas = new CanvasTxt(this.textString, {
                                fontSize: this.textFontSize,
                                fontFamily: 'IBM Plex Mono',
                                color: this.textColor
                            });
                            this.textCanvas.resize();
                            this.textCanvas.render();
                            
                            this.texture = new THREE.CanvasTexture(this.textCanvas.texture);
                            this.texture.minFilter = THREE.NearestFilter;
                            
                            const textAspect = this.textCanvas.width / this.textCanvas.height;
                            const baseH = this.planeBaseHeight;
                            const planeW = baseH * textAspect;
                            const planeH = baseH;
                            
                            this.geometry = new THREE.PlaneGeometry(planeW, planeH, 36, 36);
                            
                            // 着色器代码
                            const vertexShader = `
                                varying vec2 vUv;
                                uniform float uTime;
                                uniform float mouse;
                                uniform float uEnableWaves;
                                
                                void main() {
                                    vUv = uv;
                                    float time = uTime * 5.;
                                    
                                    float waveFactor = uEnableWaves;
                                    
                                    vec3 transformed = position;
                                    
                                    transformed.x += sin(time + position.y) * 0.5 * waveFactor;
                                    transformed.y += cos(time + position.z) * 0.15 * waveFactor;
                                    transformed.z += sin(time + position.x) * waveFactor;
                                    
                                    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
                                }
                            `;
                            
                            const fragmentShader = `
                                varying vec2 vUv;
                                uniform float mouse;
                                uniform float uTime;
                                uniform sampler2D uTexture;
                                
                                void main() {
                                    float time = uTime;
                                    vec2 pos = vUv;
                                    
                                    float move = sin(time + mouse) * 0.01;
                                    float r = texture2D(uTexture, pos + cos(time * 2. - time + pos.x) * .01).r;
                                    float g = texture2D(uTexture, pos + tan(time * .5 + pos.x - time) * .01).g;
                                    float b = texture2D(uTexture, pos - cos(time * 2. + time + pos.y) * .01).b;
                                    float a = texture2D(uTexture, pos).a;
                                    gl_FragColor = vec4(r, g, b, a);
                                }
                            `;
                            
                            this.material = new THREE.ShaderMaterial({
                                vertexShader: vertexShader,
                                fragmentShader: fragmentShader,
                                transparent: true,
                                uniforms: {
                                    uTime: { value: 0 },
                                    mouse: { value: 1.0 },
                                    uTexture: { value: this.texture },
                                    uEnableWaves: { value: this.enableWaves ? 1.0 : 0.0 }
                                }
                            });
                            
                            this.mesh = new THREE.Mesh(this.geometry, this.material);
                            this.scene.add(this.mesh);
                        }
                        
                        setRenderer() {
                            this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
                            this.renderer.setPixelRatio(1);
                            this.renderer.setClearColor(0x000000, 0);
                            
                            this.filter = new AsciiFilter(this.renderer, {
                                fontFamily: 'IBM Plex Mono',
                                fontSize: this.asciiFontSize,
                                invert: true
                            });
                            
                            this.container.appendChild(this.filter.domElement);
                            this.setSize(this.width, this.height);
                            
                            this.container.addEventListener('mousemove', this.onMouseMove);
                            this.container.addEventListener('touchmove', this.onMouseMove);
                        }
                        
                        setSize(w, h) {
                            this.width = w;
                            this.height = h;
                            
                            this.camera.aspect = w / h;
                            this.camera.updateProjectionMatrix();
                            
                            this.filter.setSize(w, h);
                            
                            this.center = { x: w / 2, y: h / 2 };
                        }
                        
                        load() {
                            this.animate();
                        }
                        
                        onMouseMove(evt) {
                            const e = evt.touches ? evt.touches[0] : evt;
                            const bounds = this.container.getBoundingClientRect();
                            const x = e.clientX - bounds.left;
                            const y = e.clientY - bounds.top;
                            this.mouse = { x, y };
                        }
                        
                        animate() {
                            const animateFrame = () => {
                                this.animationFrameId = requestAnimationFrame(animateFrame);
                                this.render();
                            };
                            animateFrame();
                        }
                        
                        render() {
                            const time = new Date().getTime() * 0.001;
                            
                            this.textCanvas.render();
                            this.texture.needsUpdate = true;
                            
                            this.mesh.material.uniforms.uTime.value = Math.sin(time);
                            
                            this.updateRotation();
                            this.filter.render(this.scene, this.camera);
                        }
                        
                        updateRotation() {
                            const x = Math.map(this.mouse.y, 0, this.height, 0.5, -0.5);
                            const y = Math.map(this.mouse.x, 0, this.width, -0.5, 0.5);
                            
                            this.mesh.rotation.x += (x - this.mesh.rotation.x) * 0.05;
                            this.mesh.rotation.y += (y - this.mesh.rotation.y) * 0.05;
                        }
                        
                        clear() {
                            this.scene.traverse(obj => {
                                if (obj.isMesh && typeof obj.material === 'object' && obj.material !== null) {
                                    Object.keys(obj.material).forEach(key => {
                                        const matProp = obj.material[key];
                                        if (matProp !== null && typeof matProp === 'object' && typeof matProp.dispose === 'function') {
                                            matProp.dispose();
                                        }
                                    });
                                    obj.material.dispose();
                                    obj.geometry.dispose();
                                }
                            });
                            this.scene.clear();
                        }
                        
                        dispose() {
                            if (this.animationFrameId) {
                                cancelAnimationFrame(this.animationFrameId);
                            }
                            if (this.filter) {
                                this.filter.dispose();
                            }
                            if (this.container && this.filter && this.filter.domElement) {
                                this.container.removeChild(this.filter.domElement);
                            }
                            this.container.removeEventListener('mousemove', this.onMouseMove);
                            this.container.removeEventListener('touchmove', this.onMouseMove);
                            this.clear();
                            if (this.renderer) {
                                this.renderer.dispose();
                            }
                        }
                    }
                    
                    // 获取容器尺寸
                    const { width, height } = container.getBoundingClientRect();
                    
                    // 创建ASCII效果实例
                    window.asciiEffect = new CanvAscii(
                        {
                            text: 'hello',
                            asciiFontSize: 9,
                            textFontSize: 180,
                            textColor: '#fdf9f3',
                            planeBaseHeight: 9,
                            enableWaves: true
                        },
                        container,
                        width,
                        height
                    );
                    
                    // 加载效果
                    window.asciiEffect.load();
                    
                    // 允许鼠标交互
                    container.style.pointerEvents = 'auto';
                    
                    // 添加鼠标悬停效果
                    container.addEventListener('mouseenter', function() {
                        if (window.asciiEffect && window.asciiEffect.material && window.asciiEffect.material.uniforms) {
                            window.asciiEffect.material.uniforms.uEnableWaves.value = 1.5;
                        }
                    });
                    
                    container.addEventListener('mouseleave', function() {
                        if (window.asciiEffect && window.asciiEffect.material && window.asciiEffect.material.uniforms) {
                            window.asciiEffect.material.uniforms.uEnableWaves.value = 1.0;
                        }
                    });
                    
                    // 监听窗口大小变化
                    window.addEventListener('resize', function() {
                        if (window.asciiEffect) {
                            const { width: newWidth, height: newHeight } = container.getBoundingClientRect();
                            window.asciiEffect.setSize(newWidth, newHeight);
                        }
                    });
                    
                    console.log('ASCII文字效果初始化成功！');
                    
                } catch (error) {
                    console.error('初始化ASCII文字效果时出错:', error);
                }
            }
        })();

        // 初始化设置
        function initializeSettings() {
            // 从本地存储加载设置
            const savedTheme = localStorage.getItem('theme') || 'light';
            const savedFontSize = localStorage.getItem('fontSize') || 'medium';
            const savedAnimations = localStorage.getItem('animationsEnabled') !== 'false';
            const savedSmoothScroll = localStorage.getItem('smoothScrollEnabled') !== 'false';
            const savedHoverEffects = localStorage.getItem('hoverEffectsEnabled') !== 'false';
            const savedClickSpark = localStorage.getItem('clickSparkEnabled') !== 'false';
            
            // 应用保存的设置
            applyTheme(savedTheme);
            applyFontSize(savedFontSize);
            
            if (!savedAnimations) document.body.classList.add('no-animation');
            if (!savedHoverEffects) document.body.classList.add('no-hover');
            if (!savedSmoothScroll) document.documentElement.style.scrollBehavior = 'auto';
            
            // 设置面板中的选项状态
            document.querySelectorAll('.theme-option').forEach(option => {
                if (option.getAttribute('data-theme') === savedTheme) {
                    option.classList.add('active');
                } else {
                    option.classList.remove('active');
                }
            });
            
            document.querySelectorAll('.font-option').forEach(option => {
                if (option.getAttribute('data-font') === savedFontSize) {
                    option.classList.add('active');
                } else {
                    option.classList.remove('active');
                }
            });
            
            const animationsToggle = document.getElementById('animationsToggle');
            const smoothScrollToggle = document.getElementById('smoothScrollToggle');
            const hoverEffectsToggle = document.getElementById('hoverEffectsToggle');
            const clickSparkToggle = document.getElementById('clickSparkToggle');
            const resetSettings = document.getElementById('resetSettings');
            if (!animationsToggle || !smoothScrollToggle || !hoverEffectsToggle || !clickSparkToggle || !resetSettings) {
                return;
            }

            animationsToggle.checked = savedAnimations;
            smoothScrollToggle.checked = savedSmoothScroll;
            hoverEffectsToggle.checked = savedHoverEffects;
            clickSparkToggle.checked = savedClickSpark;
            
            // 主题切换事件
            document.querySelectorAll('.theme-option').forEach(option => {
                option.addEventListener('click', function() {
                    const theme = this.getAttribute('data-theme');
                    
                    // 更新活动状态
                    document.querySelectorAll('.theme-option').forEach(opt => {
                        opt.classList.remove('active');
                    });
                    this.classList.add('active');
                    
                    // 应用主题
                    applyTheme(theme);
                    localStorage.setItem('theme', theme);
                });
            });
            
            // 字体大小切换事件
            document.querySelectorAll('.font-option').forEach(option => {
                option.addEventListener('click', function() {
                    const fontSize = this.getAttribute('data-font');
                    
                    // 更新活动状态
                    document.querySelectorAll('.font-option').forEach(opt => {
                        opt.classList.remove('active');
                    });
                    this.classList.add('active');
                    
                    // 应用字体大小
                    applyFontSize(fontSize);
                    localStorage.setItem('fontSize', fontSize);
                });
            });
            
            // 开关事件
            animationsToggle.addEventListener('change', function() {
                document.body.classList.toggle('no-animation', !this.checked);
                localStorage.setItem('animationsEnabled', this.checked);
            });
            
            smoothScrollToggle.addEventListener('change', function() {
                document.documentElement.style.scrollBehavior = this.checked ? 'smooth' : 'auto';
                localStorage.setItem('smoothScrollEnabled', this.checked);
            });
            
            hoverEffectsToggle.addEventListener('change', function() {
                document.body.classList.toggle('no-hover', !this.checked);
                localStorage.setItem('hoverEffectsEnabled', this.checked);
            });
            
            clickSparkToggle.addEventListener('change', function() {
                localStorage.setItem('clickSparkEnabled', this.checked);
                updateClickSparkState(this.checked);
            });
            
            // 重置设置
            resetSettings.addEventListener('click', function() {
                localStorage.removeItem('theme');
                localStorage.removeItem('fontSize');
                localStorage.removeItem('animationsEnabled');
                localStorage.removeItem('smoothScrollEnabled');
                localStorage.removeItem('hoverEffectsEnabled');
                localStorage.removeItem('clickSparkEnabled');
                
                applyTheme('light');
                applyFontSize('medium');
                document.body.classList.remove('no-animation', 'no-hover');
                document.documentElement.style.scrollBehavior = 'smooth';
                
                // 更新设置面板中的选项状态
                document.querySelectorAll('.theme-option').forEach(option => {
                    if (option.getAttribute('data-theme') === 'light') {
                        option.classList.add('active');
                    } else {
                        option.classList.remove('active');
                    }
                });
                
                document.querySelectorAll('.font-option').forEach(option => {
                    if (option.getAttribute('data-font') === 'medium') {
                        option.classList.add('active');
                    } else {
                        option.classList.remove('active');
                    }
                });
                
                // 重置开关状态
                document.getElementById('animationsToggle').checked = true;
                document.getElementById('smoothScrollToggle').checked = true;
                document.getElementById('hoverEffectsToggle').checked = true;
                document.getElementById('clickSparkToggle').checked = true;
                
                // 重置点击火花设置
                updateClickSparkState(true);
                
                alert('设置已重置为默认值！');
            });
            
            // 初始化点击火花效果
            initializeClickSpark();
        }
        
        function applyTheme(theme) {
            document.body.classList.remove('dark-theme', 'cyan-theme');
            if (theme === 'dark') {
                document.body.classList.add('dark-theme');
            } else if (theme === 'cyan') {
                document.body.classList.add('cyan-theme');
            }
            
            // 重新渲染ASCII效果以适应新主题
            setTimeout(() => {
                if (window.asciiEffect && window.asciiEffect.render) {
                    window.asciiEffect.render();
                }
            }, 100);
        }
        
        function applyFontSize(fontSize) {
            document.body.classList.remove('small-font', 'large-font');
            if (fontSize === 'small') {
                document.body.classList.add('small-font');
            } else if (fontSize === 'large') {
                document.body.classList.add('large-font');
            }
        }
        
        // 气泡菜单功能
        const bubbleMenu = document.getElementById('bubbleMenu');
        const bubbleMenuToggle = document.getElementById('bubbleMenuToggle');
        
        if (bubbleMenu && bubbleMenuToggle) {
            bubbleMenuToggle.addEventListener('click', function() {
                bubbleMenu.classList.toggle('active');
            });
        }
        
        // 点击气泡菜单项的处理
        document.querySelectorAll('.bubble-menu-item').forEach(item => {
            item.addEventListener('click', function() {
                const action = this.getAttribute('data-action');
                handleBubbleMenuAction(action);
                
                // 关闭气泡菜单
                bubbleMenu.classList.remove('active');
            });
        });
        
        // 处理气泡菜单项点击
        function handleBubbleMenuAction(action) {
            switch(action) {
                case 'theme':
                    toggleTheme();
                    break;
                case 'font-size':
                    toggleFontSize();
                    break;
                case 'animations':
                    toggleAnimations();
                    break;
                case 'smooth-scroll':
                    toggleSmoothScroll();
                    break;
                case 'hover-effects':
                    toggleHoverEffects();
                    break;
                case 'click-spark':
                    toggleClickSpark();
                    break;
                case 'reset':
                    resetSettings();
                    break;
            }
        }
        
        // 主题切换
        function toggleTheme() {
            const currentTheme = localStorage.getItem('theme') || 'light';
            let newTheme;
            
            if (currentTheme === 'light') newTheme = 'dark';
            else if (currentTheme === 'dark') newTheme = 'cyan';
            else newTheme = 'light';
            
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
            
            // 显示提示
            showNotification(`已切换到${newTheme === 'light' ? '浅色' : newTheme === 'dark' ? '深色' : '青色'}主题`);
        }
        
        // 字体大小切换
        function toggleFontSize() {
            const currentSize = localStorage.getItem('fontSize') || 'medium';
            let newSize;
            
            if (currentSize === 'small') newSize = 'medium';
            else if (currentSize === 'medium') newSize = 'large';
            else newSize = 'small';
            
            applyFontSize(newSize);
            localStorage.setItem('fontSize', newSize);
            
            // 显示提示
            showNotification(`字体大小已设置为${newSize === 'small' ? '小' : newSize === 'medium' ? '中' : '大'}`);
        }
        
        // 动画开关
        function toggleAnimations() {
            const animationsEnabled = document.body.classList.toggle('no-animation');
            localStorage.setItem('animationsEnabled', !animationsEnabled);
            
            // 显示提示
            showNotification(animationsEnabled ? '动画效果已关闭' : '动画效果已开启');
        }
        
        // 平滑滚动开关
        function toggleSmoothScroll() {
            const smoothScrollEnabled = document.documentElement.style.scrollBehavior === 'smooth';
            document.documentElement.style.scrollBehavior = smoothScrollEnabled ? 'auto' : 'smooth';
            localStorage.setItem('smoothScrollEnabled', !smoothScrollEnabled);
            
            // 显示提示
            showNotification(smoothScrollEnabled ? '平滑滚动已关闭' : '平滑滚动已开启');
        }
        
        // 悬停效果开关
        function toggleHoverEffects() {
            const hoverEffectsEnabled = document.body.classList.toggle('no-hover');
            localStorage.setItem('hoverEffectsEnabled', !hoverEffectsEnabled);
            
            // 显示提示
            showNotification(hoverEffectsEnabled ? '悬停效果已关闭' : '悬停效果已开启');
        }
        
        // 点击火花效果开关
        function toggleClickSpark() {
            const clickSparkToggle = document.getElementById('clickSparkToggle');
            if (clickSparkToggle) {
                clickSparkToggle.checked = !clickSparkToggle.checked;
                clickSparkToggle.dispatchEvent(new Event('change'));
            }
            
            // 显示提示
            const clickSparkEnabled = localStorage.getItem('clickSparkEnabled') !== 'false';
            showNotification(clickSparkEnabled ? '点击火花效果已开启' : '点击火花效果已关闭');
        }
        
        // 重置设置
        function resetSettings() {
            localStorage.removeItem('theme');
            localStorage.removeItem('fontSize');
            localStorage.removeItem('animationsEnabled');
            localStorage.removeItem('smoothScrollEnabled');
            localStorage.removeItem('hoverEffectsEnabled');
            localStorage.removeItem('clickSparkEnabled');
            
            applyTheme('light');
            applyFontSize('medium');
            document.body.classList.remove('no-animation', 'no-hover');
            document.documentElement.style.scrollBehavior = 'smooth';
            
            // 重置点击火花设置
            const clickSparkToggle = document.getElementById('clickSparkToggle');
            if (clickSparkToggle) {
                clickSparkToggle.checked = true;
            }
            
            // 显示提示
            showNotification('所有设置已重置为默认值');
        }
        
        // 显示通知
        function showNotification(message) {
            // 创建通知元素
            const notification = document.createElement('div');
            notification.textContent = message;
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background-color: #0066cc;
                color: white;
                padding: 12px 20px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                z-index: 3000;
                font-size: 14px;
                transition: all 0.3s ease;
                opacity: 0;
                transform: translateY(-20px);
            `;
            
            document.body.appendChild(notification);
            
            // 显示动画
            setTimeout(() => {
                notification.style.opacity = '1';
                notification.style.transform = 'translateY(0)';
            }, 10);
            
            // 自动隐藏
            setTimeout(() => {
                notification.style.opacity = '0';
                notification.style.transform = 'translateY(-20px)';
                
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        }
        
        // 修复设置面板打开功能
        const settingsBtn = document.getElementById('settingsBtn');
        const closeSettings = document.getElementById('closeSettings');
        const settingsPanel = document.getElementById('settingsPanel');
        const settingsOverlay = document.getElementById('settingsOverlay');
        
        if (settingsBtn && closeSettings && settingsPanel && settingsOverlay) {
            settingsBtn.addEventListener('click', function() {
                settingsPanel.classList.add('active');
                settingsOverlay.classList.add('active');
            });

            closeSettings.addEventListener('click', function() {
                settingsPanel.classList.remove('active');
                settingsOverlay.classList.remove('active');
            });

            settingsOverlay.addEventListener('click', function() {
                settingsPanel.classList.remove('active');
                settingsOverlay.classList.remove('active');
            });
        }
        
        // 点击火花效果初始化
        function initializeClickSpark() {
            const clickSparkToggle = document.getElementById('clickSparkToggle');
            const clickSparkContainer = document.getElementById('clickSparkContainer');
            let clickSparkEnabled = localStorage.getItem('clickSparkEnabled') !== 'false';
            
            // 设置初始状态
            if (clickSparkToggle) {
                clickSparkToggle.checked = clickSparkEnabled;
            }
            updateClickSparkState(clickSparkEnabled);
            
            // 监听切换事件
            if (clickSparkToggle) {
                clickSparkToggle.addEventListener('change', function() {
                    clickSparkEnabled = this.checked;
                    localStorage.setItem('clickSparkEnabled', clickSparkEnabled);
                    updateClickSparkState(clickSparkEnabled);
                });
            }
            
            function updateClickSparkState(enabled) {
                if (enabled) {
                    document.addEventListener('click', createClickSpark);
                } else {
                    document.removeEventListener('click', createClickSpark);
                }
            }
            
            function createClickSpark(e) {
                // 如果动画被禁用，则不创建火花
                if (document.body.classList.contains('no-animation')) {
                    return;
                }
                
                const sparkCount = 8;
                const sparkRadius = 15;
                const duration = 400;
                
                for (let i = 0; i < sparkCount; i++) {
                    const spark = document.createElement('div');
                    spark.className = 'spark';
                    
                    // 设置火花位置
                    spark.style.left = `${e.clientX}px`;
                    spark.style.top = `${e.clientY}px`;
                    
                    // 随机角度
                    const angle = (i / sparkCount) * Math.PI * 2;
                    const distance = Math.random() * sparkRadius + 5;
                    
                    // 计算最终位置
                    const endX = e.clientX + Math.cos(angle) * distance;
                    const endY = e.clientY + Math.sin(angle) * distance;
                    
                    // 添加到容器
                    clickSparkContainer.appendChild(spark);
                    
                    // 火花动画
                    const animation = spark.animate([
                        {
                            transform: 'translate(-50%, -50%) scale(1)',
                            opacity: 1
                        },
                        {
                            transform: `translate(calc(-50% + ${endX - e.clientX}px), calc(-50% + ${endY - e.clientY}px)) scale(0)`,
                            opacity: 0
                        }
                    ], {
                        duration: duration,
                        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                        fill: 'forwards'
                    });
                    
                    // 动画结束后移除元素
                    animation.onfinish = () => {
                        spark.remove();
                    };
                }
            }
        }
        
        // 修复登录/注册页面切换
        const loginBtn = document.getElementById('loginBtn');
        const registerLink = document.getElementById('registerLink');
        const loginLink = document.getElementById('loginLink');
        
        if (loginBtn && document.getElementById('login')) loginBtn.addEventListener('click', function() {
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById('login').classList.add('active');
        });
        
        if (registerLink) registerLink.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById('register').classList.add('active');
        });
        
        if (loginLink) loginLink.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById('login').classList.add('active');
        });
        
        // 修复页面导航
        document.querySelectorAll('.nav-link[data-page]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetPage = this.getAttribute('data-page');
                
                document.querySelectorAll('.page').forEach(page => {
                    page.classList.remove('active');
                });
                
                document.getElementById(targetPage).classList.add('active');
                
                if (targetPage === 'home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                
                // 如果是历史页面，重新加载历史数据
                if (targetPage === 'history') {
                    loadHistoryData();
                }
                
                // 如果是事件页面，重新加载事件数据
                if (targetPage === 'events') {
                    loadEventData();
                }
            });
        });
        
        // GradientBlinds背景特效实现
        function initializeGradientBlindsBackground() {
            const container = document.getElementById('gradientBlindsBg');
            if (!container) return;
            
            const blindsContainer = document.createElement('div');
            blindsContainer.className = 'gradient-blinds';
            container.appendChild(blindsContainer);
            
            // 创建百叶窗
            const blindCount = 12;
            for (let i = 0; i < blindCount; i++) {
                const blind = document.createElement('div');
                blind.className = 'blind';
                blindsContainer.appendChild(blind);
            }
            
            // 鼠标移动效果
            document.addEventListener('mousemove', function(e) {
                const blinds = document.querySelectorAll('.blind');
                const mouseX = e.clientX / window.innerWidth;
                const mouseY = e.clientY / window.innerHeight;
                
                blinds.forEach((blind, index) => {
                    // 计算每个百叶窗的偏移量
                    const offset = (index / blinds.length - 0.5) * 2;
                    const transformX = (mouseX - 0.5) * 20 * offset;
                    const transformY = (mouseY - 0.5) * 20 * offset;
                    
                    blind.style.transform = `translate(${transformX}px, ${transformY}px)`;
                    
                    // 添加噪声效果
                    const noise = Math.random() * 0.3;
                    blind.style.filter = `brightness(${1 + noise})`;
                });
            });
            
            // 鼠标离开时重置
            document.addEventListener('mouseleave', function() {
                const blinds = document.querySelectorAll('.blind');
                blinds.forEach(blind => {
                    blind.style.transform = 'translate(0, 0)';
                    blind.style.filter = 'brightness(1)';
                });
            });
        }
        
        // 初始化3D方块效果
        function initialize3DCubes() {
            const container = document.getElementById('cubesContainer');
            if (!container) return;
            
            // 清空容器
            container.innerHTML = '';
            
            // 创建多个3D方块
            const cubeCount = 15;
            const cubes = [];
            
            for (let i = 0; i < cubeCount; i++) {
                const cube = document.createElement('div');
                cube.className = 'cube-3d';
                
                // 随机位置
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                cube.style.left = `${x}%`;
                cube.style.top = `${y}%`;
                
                // 随机旋转
                const rotateX = Math.random() * 360;
                const rotateY = Math.random() * 360;
                cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                
                // 创建6个面
                for (let j = 0; j < 6; j++) {
                    const face = document.createElement('div');
                    face.className = 'cube-face';
                    face.innerHTML = '<i class="fas fa-cube"></i>';
                    cube.appendChild(face);
                }
                
                container.appendChild(cube);
                cubes.push({
                    element: cube,
                    x: x,
                    y: y,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    rotationX: rotateX,
                    rotationY: rotateY,
                    rotationSpeedX: (Math.random() - 0.5) * 0.5,
                    rotationSpeedY: (Math.random() - 0.5) * 0.5
                });
            }
            
            // 鼠标位置
            let mouseX = 0;
            let mouseY = 0;
            
            // 监听鼠标移动
            document.addEventListener('mousemove', function(e) {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });
            
            // 动画循环
            function animate() {
                cubes.forEach(cube => {
                    // 计算与鼠标的距离
                    const rect = cube.element.getBoundingClientRect();
                    const cubeCenterX = rect.left + rect.width / 2;
                    const cubeCenterY = rect.top + rect.height / 2;
                    
                    const dx = cubeCenterX - mouseX;
                    const dy = cubeCenterY - mouseY;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    // 鼠标排斥效果
                    if (distance < 150) {
                        const force = 150 - distance;
                        const angle = Math.atan2(dy, dx);
                        
                        cube.vx += Math.cos(angle) * force * 0.0005;
                        cube.vy += Math.sin(angle) * force * 0.0005;
                    }
                    
                    // 更新位置
                    cube.x += cube.vx;
                    cube.y += cube.vy;
                    
                    // 边界检测
                    if (cube.x < 0 || cube.x > 100) {
                        cube.vx *= -0.8;
                        cube.x = Math.max(0, Math.min(100, cube.x));
                    }
                    
                    if (cube.y < 0 || cube.y > 100) {
                        cube.vy *= -0.8;
                        cube.y = Math.max(0, Math.min(100, cube.y));
                    }
                    
                    // 阻尼
                    cube.vx *= 0.98;
                    cube.vy *= 0.98;
                    
                    // 更新旋转
                    cube.rotationX += cube.rotationSpeedX;
                    cube.rotationY += cube.rotationSpeedY;
                    
                    // 应用变换
                    cube.element.style.left = `${cube.x}%`;
                    cube.element.style.top = `${cube.y}%`;
                    cube.element.style.transform = `rotateX(${cube.rotationX}deg) rotateY(${cube.rotationY}deg)`;
                });
                
                requestAnimationFrame(animate);
            }
            
            animate();
        }
        
        // 初始化历史数据
        function initializeHistoryData() {
            if (!localStorage.getItem('historyEvents')) {
                const defaultHistory = [
                    {
                        id: 1,
                        date: '2025-10-13',
                        title: '域名创建成功',
                        description: '此域名于2025年10月13日成功创建，标志着网站项目的正式启动。',
                        type: 'milestone',
                        image: 'https://via.placeholder.com/600x400'
                    },
                    {
                        id: 2,
                        date: '2025-10-15',
                        title: '网站创建成功',
                        description: '经过两天的开发，网站于2025年10月15日成功上线，实现了基本功能。',
                        type: 'milestone',
                        image: 'https://via.placeholder.com/600x400'
                    },
                    {
                        id: 3,
                        date: '2025-10-16',
                        title: '页面美观与功能完善',
                        description: '网站页面大美观基础功能已完善部分，用户体验得到显著提升。',
                        type: 'improvement',
                        image: 'https://via.placeholder.com/600x400'
                    }
                ];
                localStorage.setItem('historyEvents', JSON.stringify(defaultHistory));
            }
            
            // 加载历史数据
            loadHistoryData();
        }
        
        // 加载历史数据到页面
        function loadHistoryData() {
            const historyGrid = document.getElementById('historyGrid');
            if (!historyGrid) return;
            
            const historyEvents = JSON.parse(localStorage.getItem('historyEvents')) || [];
            
            historyGrid.innerHTML = '';
            
            historyEvents.forEach(event => {
                const historyCard = document.createElement('div');
                historyCard.className = 'bento-card';
                
                const formattedDate = formatDate(event.date);
                
                historyCard.innerHTML = `
                    <div class="bento-card-content">
                        <div class="bento-label">${formattedDate}</div>
                        ${event.image ? `<img src="${event.image}" alt="${event.title}" class="history-image">` : ''}
                        <h3 class="bento-title">${event.title}</h3>
                        <p class="bento-description">${event.description}</p>
                    </div>
                `;
                
                historyGrid.appendChild(historyCard);
            });
        }
        
        // 初始化事件数据
        function initializeEventData() {
            if (!localStorage.getItem('events')) {
                const defaultEvents = [
                    {
                        id: 1,
                        date: '2025-10-20',
                        title: '网站正式上线',
                        description: '经过多轮测试，网站正式上线，欢迎访问！',
                        image: 'https://via.placeholder.com/600x400'
                    },
                    {
                        id: 2,
                        date: '2025-10-25',
                        title: '新增多语言支持',
                        description: '网站新增了中文、英文和法文多语言支持，提升国际化体验。',
                        image: 'https://via.placeholder.com/600x400'
                    }
                ];
                localStorage.setItem('events', JSON.stringify(defaultEvents));
            }
            
            // 加载事件数据
            loadEventData();
        }
        
        // 加载事件数据到页面
        function loadEventData() {
            const eventsGrid = document.getElementById('eventsGrid');
            if (!eventsGrid) return;
            
            const events = JSON.parse(localStorage.getItem('events')) || [];
            
            eventsGrid.innerHTML = '';
            
            events.forEach(event => {
                const eventCard = document.createElement('div');
                eventCard.className = 'event-card';
                
                const formattedDate = formatDate(event.date);
                
                eventCard.innerHTML = `
                    ${event.image ? `<img src="${event.image}" alt="${event.title}" class="event-image">` : ''}
                    <div class="event-content">
                        <div class="event-date">${formattedDate}</div>
                        <h3 class="event-title">${event.title}</h3>
                        <p class="event-desc">${event.description}</p>
                    </div>
                `;
                
                eventsGrid.appendChild(eventCard);
            });
        }
        
        // 格式化日期
        function formatDate(dateString) {
            const date = new Date(dateString);
            return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
        }
        
        // 初始化用户状态
        function checkLoginStatus() {
            const user = JSON.parse(localStorage.getItem('currentUser'));
            const userAvatar = document.getElementById('userAvatar');
            const userName = document.getElementById('userName');
            const loginBtn = document.getElementById('loginBtn');
            const profileName = document.getElementById('profileName');
            const profileEmail = document.getElementById('profileEmail');
            const profileAvatar = document.getElementById('profileAvatar');
            const adminPanel = document.getElementById('adminPanel');
            if (!userAvatar || !userName || !loginBtn) return;
            
            // 移动端元素
            const mobileUserAvatar = document.getElementById('mobileUserAvatar');
            const mobileUserName = document.getElementById('mobileUserName');
            const mobileLoginBtn = document.getElementById('mobileLoginBtn');
            
            if (user) {
                // 桌面端用户状态
                loginBtn.style.display = 'none';
                userAvatar.style.display = 'flex';
                userName.style.display = 'block';
                userAvatar.textContent = user.username.charAt(0).toUpperCase();
                userName.textContent = user.username;
                
                // 移动端用户状态
                if (mobileUserAvatar && mobileUserName && mobileLoginBtn) {
                    mobileLoginBtn.style.display = 'none';
                    mobileUserAvatar.style.display = 'flex';
                    mobileUserName.style.display = 'block';
                    mobileUserAvatar.textContent = user.username.charAt(0).toUpperCase();
                    mobileUserName.textContent = user.username;
                }
                
                // 更新个人资料页面
                if (profileName && profileEmail && profileAvatar) {
                    profileName.textContent = user.username;
                    profileEmail.textContent = user.email || `${user.username}@example.com`;
                    profileAvatar.textContent = user.username.charAt(0).toUpperCase();
                }
                
                // 如果是管理员，显示管理员面板
                if (user.role === 'admin' && adminPanel) {
                    adminPanel.style.display = 'block';
                    
                    // 初始化事件管理
                    initializeEventManagement();
                    // 初始化历史事件管理
                    initializeHistoryManagement();
                }
                
                // 添加头像点击事件
                setupAvatarClickEvents();
            } else {
                // 桌面端用户状态
                loginBtn.style.display = 'block';
                userAvatar.style.display = 'none';
                userName.style.display = 'none';
                
                // 移动端用户状态
                if (mobileUserAvatar && mobileUserName && mobileLoginBtn) {
                    mobileLoginBtn.style.display = 'block';
                    mobileUserAvatar.style.display = 'none';
                    mobileUserName.style.display = 'none';
                }
                
                if (adminPanel) adminPanel.style.display = 'none';
            }
        }
        
        // 初始化事件管理
        function initializeEventManagement() {
            const eventForm = document.getElementById('eventForm');
            const existingEvents = document.getElementById('existingEvents');
            
            if (!eventForm || !existingEvents) return;
            if (eventForm.dataset.sourceEmbedReady === 'true') return;
            eventForm.dataset.sourceEmbedReady = 'true';
            
            // 加载现有事件
            loadExistingEvents();
            
            // 处理事件表单提交
            eventForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const title = document.getElementById('eventTitle').value.trim();
                const description = document.getElementById('eventDescription').value.trim();
                const image = document.getElementById('eventImage').value.trim();
                const date = document.getElementById('eventDate').value;
                
                if (!title || !description || !date) {
                    alert('请填写所有必填字段');
                    return;
                }
                
                const events = JSON.parse(localStorage.getItem('events')) || [];
                const newId = events.length > 0 ? Math.max(...events.map(e => e.id)) + 1 : 1;
                
                const newEvent = {
                    id: newId,
                    date: date,
                    title: title,
                    description: description,
                    image: image || 'https://via.placeholder.com/600x400'
                };
                
                events.push(newEvent);
                localStorage.setItem('events', JSON.stringify(events));
                
                // 重新加载事件数据
                loadEventData();
                loadExistingEvents();
                
                // 生成并弹出已经嵌入新事件的完整源码
                const embeddedSource = generateEmbeddedSiteSource({ page: 'events', events: events });
                showEmbeddedSourceModal(embeddedSource, '事件页面 events.html');
                
                // 重置表单
                eventForm.reset();
                const eventImagePreview = document.getElementById('eventImagePreview');
                if (eventImagePreview) {
                    eventImagePreview.classList.remove('active');
                    eventImagePreview.src = '';
                }
            });
            
            // 图片预览功能
            const eventImageInput = document.getElementById('eventImage');
            const eventImagePreview = document.getElementById('eventImagePreview');
            
            if (eventImageInput && eventImagePreview) {
                eventImageInput.addEventListener('input', function() {
                    if (this.value) {
                        eventImagePreview.src = this.value;
                        eventImagePreview.classList.add('active');
                    } else {
                        eventImagePreview.classList.remove('active');
                    }
                });
            }
        }
        
        // 加载现有事件到管理面板
        function loadExistingEvents() {
            const existingEvents = document.getElementById('existingEvents');
            if (!existingEvents) return;
            
            const events = JSON.parse(localStorage.getItem('events')) || [];
            
            existingEvents.innerHTML = '';
            
            events.forEach(event => {
                const eventItem = document.createElement('div');
                eventItem.className = 'user-item';
                eventItem.innerHTML = `
                    <div>
                        <strong>${event.title}</strong> - ${formatDate(event.date)}
                        <p style="margin: 5px 0 0; font-size: 12px; color: #666;">${event.description}</p>
                    </div>
                    <div>
                        <button class="admin-btn delete" data-id="${event.id}">删除</button>
                    </div>
                `;
                
                existingEvents.appendChild(eventItem);
            });
            
            // 添加删除事件监听
            document.querySelectorAll('#existingEvents .admin-btn.delete').forEach(btn => {
                btn.addEventListener('click', function() {
                    const id = parseInt(this.getAttribute('data-id'));
                    deleteEvent(id);
                });
            });
        }
        
        // 删除事件
        function deleteEvent(id) {
            if (!confirm('确定要删除这个事件吗？')) return;
            
            let events = JSON.parse(localStorage.getItem('events')) || [];
            events = events.filter(event => event.id !== id);
            localStorage.setItem('events', JSON.stringify(events));
            
            // 重新加载事件数据
            loadEventData();
            loadExistingEvents();
            
            alert('事件已删除！');
        }
        
        // 生成“已嵌入事件/历史”的完整源码
        function safeJsonForSource(data) {
            return JSON.stringify(data, null, 24)
                .replace(/</g, '\\u003C')
                .replace(/>/g, '\\u003E')
                .replace(/&/g, '\\u0026');
        }

        function generatedTopChrome(activePage) {
            const active = page => page === activePage ? ' active' : '';
            return `<div class="gradient-blinds-container" id="gradientBlindsBg"></div><div class="click-spark-container" id="clickSparkContainer"></div><nav><div class="container nav-container"><a href="index.html" class="logo">WTX</a><div class="nav-links"><a href="index.html" class="nav-link">首页</a><a href="history.html" class="nav-link${active('history')}">历史</a><a href="events.html" class="nav-link${active('events')}">事件</a><a href="index.html#skills" class="nav-link">专业技能</a><a href="index.html#projects" class="nav-link">项目经验</a><a href="index.html#about" class="nav-link">关于我</a><a href="index.html#contact" class="nav-link">联系方式</a><div class="user-status" id="userStatus"><div class="user-avatar" id="userAvatar" style="display: none;"></div><span class="user-name" id="userName" style="display: none;"></span><button class="login-btn" id="loginBtn">登录</button></div><div class="language-switcher" id="languageSwitcher"><span id="currentLanguage">中文</span><i class="fas fa-chevron-down"></i><div class="language-options" id="languageOptions"><div class="language-option" data-lang="zh">中文</div><div class="language-option" data-lang="en">English</div><div class="language-option" data-lang="fr">Français</div></div></div><button class="settings-btn" id="settingsBtn"><i class="fas fa-cog"></i></button></div><button class="mobile-menu-btn" id="mobileMenuBtn"><i class="fas fa-bars"></i></button></div></nav><div class="mobile-menu-overlay" id="mobileMenuOverlay"></div><div class="mobile-menu" id="mobileMenu"><button class="mobile-menu-close" id="mobileMenuClose"><i class="fas fa-times"></i></button><div class="mobile-menu-links"><a href="index.html" class="nav-link">首页</a><a href="history.html" class="nav-link${active('history')}">历史</a><a href="events.html" class="nav-link${active('events')}">事件</a><a href="index.html#skills" class="nav-link">专业技能</a><a href="index.html#projects" class="nav-link">项目经验</a><a href="index.html#about" class="nav-link">关于我</a><a href="index.html#contact" class="nav-link">联系方式</a><div class="user-status" id="mobileUserStatus"><div class="user-avatar" id="mobileUserAvatar" style="display: none;"></div><span class="user-name" id="mobileUserName" style="display: none;"></span><a href="#" class="mobile-login-btn" id="mobileLoginBtn">登录</a></div><div class="language-switcher" id="mobileLanguageSwitcher"><span id="mobileCurrentLanguage">中文</span><i class="fas fa-chevron-down"></i><div class="language-options" id="mobileLanguageOptions"><div class="language-option" data-lang="zh">中文</div><div class="language-option" data-lang="en">English</div><div class="language-option" data-lang="fr">Français</div></div></div><a href="#" id="mobileSettingsBtn"><i class="fas fa-cog"></i> 网站设置</a></div></div>`;
        }

        function generatedFooterAndScripts(extraScripts) {
            return `<footer><div class="container"><div class="footer-content"><div class="footer-column"><h3>WTX</h3><p>苹果风格个人网页 · 模块化版本</p></div><div class="footer-column"><h3>页面</h3><ul><li><a href="events.html">事件</a></li><li><a href="history.html">历史</a></li><li><a href="admin-event-history.html">管理</a></li></ul></div></div><div class="copyright">© 2026 WTX. Modular Apple Style Site.</div></div></footer>${extraScripts}`;
        }

        function generatedSettingsPanel() {
            return `<div class="settings-overlay" id="settingsOverlay"></div><div class="settings-panel" id="settingsPanel"><div class="settings-header"><h2 class="settings-title" data-i18n="settings">网站设置</h2><button class="close-settings" id="closeSettings"><i class="fas fa-times"></i></button></div><div class="setting-group"><label class="setting-label" data-i18n="theme">主题</label><div class="theme-options"><div class="theme-option active" data-theme="light" data-i18n="light">浅色</div><div class="theme-option" data-theme="dark" data-i18n="dark">深色</div><div class="theme-option" data-theme="cyan" data-i18n="cyan">青色</div></div></div><div class="setting-group"><label class="setting-label" data-i18n="fontSize">字体大小</label><div class="font-options"><div class="font-option" data-font="small" data-i18n="small">小</div><div class="font-option active" data-font="medium" data-i18n="medium">中</div><div class="font-option" data-font="large" data-i18n="large">大</div></div></div><div class="setting-option"><span class="setting-option-label" data-i18n="animations">动画效果</span><label class="toggle-switch"><input type="checkbox" id="animationsToggle" checked><span class="toggle-slider"></span></label></div><div class="setting-option"><span class="setting-option-label" data-i18n="smoothScroll">平滑滚动</span><label class="toggle-switch"><input type="checkbox" id="smoothScrollToggle" checked><span class="toggle-slider"></span></label></div><div class="setting-option"><span class="setting-option-label" data-i18n="hoverEffects">悬停效果</span><label class="toggle-switch"><input type="checkbox" id="hoverEffectsToggle" checked><span class="toggle-slider"></span></label></div><div class="setting-option"><span class="setting-option-label">点击火花效果</span><label class="toggle-switch"><input type="checkbox" id="clickSparkToggle" checked><span class="toggle-slider"></span></label></div><div class="setting-group"><button class="reset-btn" id="resetSettings" data-i18n="reset">重置为默认设置</button></div></div>`;
        }

        function generateEventsPageSource(events) {
            const safeEvents = safeJsonForSource(events);
            return `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>事件 - WTX</title><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"><link rel="stylesheet" href="css/style.css"></head><body data-i18n-title="eventsPageTitle">${generatedTopChrome('events')}${generatedSettingsPanel()}<main><section class="page-hero"><div class="container"><h1>事件</h1><p>这里展示网站与项目的重要事件。</p></div></section><section class="events"><div class="container"><div id="eventsGrid" class="events-grid"></div></div></section></main>${generatedFooterAndScripts(`<script>localStorage.setItem('events', JSON.stringify(${safeEvents}));</script><script src="js/common.js"></script><script src="js/data.js"></script><script src="js/events.js"></script>`)}</body></html>`;
        }

        function generateHistoryPageSource(historyEvents) {
            const safeHistories = safeJsonForSource(historyEvents);
            return `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>历史 - WTX</title><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"><link rel="stylesheet" href="css/style.css"></head><body data-i18n-title="historyPageTitle">${generatedTopChrome('history')}${generatedSettingsPanel()}<main><section class="page-hero"><div class="container"><h1>历史</h1><p>这里展示项目成长记录和历史节点。</p></div></section><section class="history-section"><div class="container"><div id="historyGrid" class="history-grid"></div></div></section></main>${generatedFooterAndScripts(`<script>localStorage.setItem('histories', JSON.stringify(${safeHistories}));localStorage.setItem('historyEvents', JSON.stringify(${safeHistories}));</script><script src="js/common.js"></script><script src="js/data.js"></script><script src="js/history.js"></script>`)}</body></html>`;
        }

        function generateEmbeddedSiteSource(options = {}) {
            if (options.page === 'events') {
                const events = options.events || JSON.parse(localStorage.getItem('events')) || [];
                return generateEventsPageSource(events);
            }
            if (options.page === 'history') {
                const historyEvents = options.historyEvents || JSON.parse(localStorage.getItem('historyEvents')) || JSON.parse(localStorage.getItem('histories')) || [];
                return generateHistoryPageSource(historyEvents);
            }

            const modal = document.getElementById('sourceExportModal');
            const wasOpen = modal && modal.classList.contains('active');
            if (modal) modal.remove();

            let source = window.__ORIGINAL_HTML_SOURCE__ || ('<!DOCTYPE html>\n' + document.documentElement.outerHTML);
            const events = options.events || JSON.parse(localStorage.getItem('events')) || [];
            const historyEvents = options.historyEvents || JSON.parse(localStorage.getItem('historyEvents')) || [];

            source = source.replace(/const defaultEvents = \[\s\S]*?\n\s*\];/, `const defaultEvents = ${safeJsonForSource(events)};`);
            source = source.replace(/const defaultHistory = \[\s\S]*?\n\s*\];/, `const defaultHistory = ${safeJsonForSource(historyEvents)};`);

            const dataSeed = `<script id="embedded-event-history-data">
        localStorage.setItem('events', JSON.stringify(${safeJsonForSource(events)}));
        localStorage.setItem('historyEvents', JSON.stringify(${safeJsonForSource(historyEvents)}));
    </script>`;

            source = source.replace(/\s*<script id="embedded-event-history-data">[\s\S]*?<\/script>/, '');
            if (source.includes('<script src="js/common.js"></script>')) {
                source = source.replace('<script src="js/common.js"></script>', `${dataSeed}\n    <script src="js/common.js"></script>`);
            } else {
                source = source.replace('</body>', `${dataSeed}\n</body>`);
            }

            if (modal) {
                document.body.appendChild(modal);
                if (wasOpen) modal.classList.add('active');
            }

            return source;
        }

        // 兼容旧调用：生成“已嵌入历史事件”的完整源码
        function generateEmbeddedHistorySource(historyEvents) {
            return generateEmbeddedSiteSource({ page: 'history', historyEvents: historyEvents });
        }

        // 弹出源码复制页面
        function showEmbeddedSourceModal(sourceCode, embedType = '历史事件') {
            let modal = document.getElementById('sourceExportModal');
            if (!modal) {
                modal = document.createElement('div');
                modal.id = 'sourceExportModal';
                modal.className = 'source-export-modal';
                modal.innerHTML = `
                    <div class="source-export-panel">
                        <div class="source-export-header">
                            <div>
                                <div class="source-export-title">已生成嵌入后的完整源代码</div>
                                <p class="source-export-note" id="sourceExportNote">复制下面代码，替换原来的 HTML 文件，就能把这条内容写进网页本体。</p>
                            </div>
                            <button type="button" class="source-export-close" data-source-close>关闭</button>
                        </div>
                        <textarea class="source-export-code" id="sourceExportCode" spellcheck="false"></textarea>
                        <div class="source-export-footer">
                            <p class="source-export-note">提示：复制后保存为原文件名，再刷新网页查看。</p>
                            <div class="source-export-actions">
                                <button type="button" class="source-export-close" data-source-close>取消</button>
                                <button type="button" class="source-export-copy" id="copyEmbeddedSourceBtn">复制源代码</button>
                            </div>
                        </div>
                    </div>
                `;
                document.body.appendChild(modal);
                modal.addEventListener('click', function(e) {
                    if (e.target === modal || e.target.hasAttribute('data-source-close')) {
                        modal.classList.remove('active');
                    }
                });
                document.getElementById('copyEmbeddedSourceBtn').addEventListener('click', async function() {
                    const codeBox = document.getElementById('sourceExportCode');
                    codeBox.select();
                    codeBox.setSelectionRange(0, codeBox.value.length);
                    try {
                        await navigator.clipboard.writeText(codeBox.value);
                    } catch (err) {
                        document.execCommand('copy');
                    }
                    this.textContent = '已复制，可以替换原文件';
                    setTimeout(() => this.textContent = '复制源代码', 1800);
                });
            }
            document.getElementById('sourceExportCode').value = sourceCode;
            const note = document.getElementById('sourceExportNote');
            if (note) note.textContent = `复制下面代码，替换原来的 HTML 文件，就能把这条${embedType}写进网页本体。`;
            modal.classList.add('active');
        }

        // 初始化历史事件管理
        function initializeHistoryManagement() {
            const historyForm = document.getElementById('historyForm');
            const existingHistories = document.getElementById('existingHistories');
            
            if (!historyForm || !existingHistories) return;
            if (historyForm.dataset.sourceEmbedReady === 'true') return;
            historyForm.dataset.sourceEmbedReady = 'true';
            
            // 加载现有历史事件
            loadExistingHistories();
            
            // 处理历史事件表单提交
            historyForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const title = document.getElementById('historyTitle').value.trim();
                const description = document.getElementById('historyDescription').value.trim();
                const image = document.getElementById('historyImage').value.trim();
                const date = document.getElementById('historyDate').value;
                
                if (!title || !description || !date) {
                    alert('请填写所有必填字段');
                    return;
                }
                
                const historyEvents = JSON.parse(localStorage.getItem('historyEvents')) || [];
                const newId = historyEvents.length > 0 ? Math.max(...historyEvents.map(e => e.id)) + 1 : 1;
                
                const newHistory = {
                    id: newId,
                    date: date,
                    title: title,
                    description: description,
                    image: image || 'https://via.placeholder.com/600x400',
                    type: 'milestone'
                };
                
                historyEvents.push(newHistory);
                localStorage.setItem('historyEvents', JSON.stringify(historyEvents));
                localStorage.setItem('histories', JSON.stringify(historyEvents));
                
                // 重新加载历史数据
                loadHistoryData();
                loadExistingHistories();
                
                // 生成并弹出已经嵌入新历史事件的完整源码
                const embeddedSource = generateEmbeddedHistorySource(historyEvents);
                showEmbeddedSourceModal(embeddedSource, '历史页面 history.html');
                
                // 重置表单
                historyForm.reset();
                const historyImagePreview = document.getElementById('historyImagePreview');
                if (historyImagePreview) {
                    historyImagePreview.classList.remove('active');
                    historyImagePreview.src = '';
                }
            });
            
            // 图片预览功能
            const historyImageInput = document.getElementById('historyImage');
            const historyImagePreview = document.getElementById('historyImagePreview');
            
            if (historyImageInput && historyImagePreview) {
                historyImageInput.addEventListener('input', function() {
                    if (this.value) {
                        historyImagePreview.src = this.value;
                        historyImagePreview.classList.add('active');
                    } else {
                        historyImagePreview.classList.remove('active');
                    }
                });
            }
        }
        
        // 加载现有历史事件到管理面板
        function loadExistingHistories() {
            const existingHistories = document.getElementById('existingHistories');
            if (!existingHistories) return;
            
            const historyEvents = JSON.parse(localStorage.getItem('historyEvents')) || [];
            
            existingHistories.innerHTML = '';
            
            historyEvents.forEach(event => {
                const historyItem = document.createElement('div');
                historyItem.className = 'user-item';
                historyItem.innerHTML = `
                    <div>
                        <strong>${event.title}</strong> - ${formatDate(event.date)}
                        <p style="margin: 5px 0 0; font-size: 12px; color: #666;">${event.description}</p>
                    </div>
                    <div>
                        <button class="admin-btn delete" data-id="${event.id}">删除</button>
                    </div>
                `;
                
                existingHistories.appendChild(historyItem);
            });
            
            // 添加删除事件监听
            document.querySelectorAll('#existingHistories .admin-btn.delete').forEach(btn => {
                btn.addEventListener('click', function() {
                    const id = parseInt(this.getAttribute('data-id'));
                    deleteHistoryEvent(id);
                });
            });
        }
        
        // 删除历史事件
        function deleteHistoryEvent(id) {
            if (!confirm('确定要删除这个历史事件吗？')) return;
            
            let historyEvents = JSON.parse(localStorage.getItem('historyEvents')) || [];
            historyEvents = historyEvents.filter(event => event.id !== id);
            localStorage.setItem('historyEvents', JSON.stringify(historyEvents));
            
            // 重新加载历史数据
            loadHistoryData();
            loadExistingHistories();
            
            alert('历史事件已删除！');
        }
        
        // 设置头像点击事件
        function setupAvatarClickEvents() {
            // 桌面端头像点击事件
            const userAvatar = document.getElementById('userAvatar');
            const userName = document.getElementById('userName');
            
            if (userAvatar) {
                userAvatar.addEventListener('click', function() {
                    document.querySelectorAll('.page').forEach(page => {
                        page.classList.remove('active');
                    });
                    document.getElementById('profile').classList.add('active');
                });
            }
            
            if (userName) {
                userName.addEventListener('click', function() {
                    document.querySelectorAll('.page').forEach(page => {
                        page.classList.remove('active');
                    });
                    document.getElementById('profile').classList.add('active');
                });
            }
            
            // 移动端头像点击事件
            const mobileUserAvatar = document.getElementById('mobileUserAvatar');
            const mobileUserName = document.getElementById('mobileUserName');
            
            if (mobileUserAvatar) {
                mobileUserAvatar.addEventListener('click', function() {
                    document.querySelectorAll('.page').forEach(page => {
                        page.classList.remove('active');
                    });
                    document.getElementById('profile').classList.add('active');
                    
                    // 关闭移动端菜单
                    const mobileMenu = document.getElementById('mobileMenu');
                    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
                    if (mobileMenu && mobileMenuOverlay) {
                        mobileMenu.classList.remove('active');
                        mobileMenuOverlay.classList.remove('active');
                    }
                });
            }
            
            if (mobileUserName) {
                mobileUserName.addEventListener('click', function() {
                    document.querySelectorAll('.page').forEach(page => {
                        page.classList.remove('active');
                    });
                    document.getElementById('profile').classList.add('active');
                    
                    // 关闭移动端菜单
                    const mobileMenu = document.getElementById('mobileMenu');
                    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
                    if (mobileMenu && mobileMenuOverlay) {
                        mobileMenu.classList.remove('active');
                        mobileMenuOverlay.classList.remove('active');
                    }
                });
            }
        }
        
        // 初始化用户数据
        function initializeUsers() {
            if (!localStorage.getItem('users')) {
                const defaultUsers = [
                    { 
                        username: 'WTX', 
                        password: 'Wgp@201123', 
                        role: 'admin',
                        email: 'wtx@example.com'
                    }
                ];
                localStorage.setItem('users', JSON.stringify(defaultUsers));
            }
        }
        
        // 修复登录表单提交
        const loginForm = document.getElementById('loginForm');
        if (loginForm) loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            const users = JSON.parse(localStorage.getItem('users'));
            const user = users.find(u => u.username === username && u.password === password);
            
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                checkLoginStatus();
                
                // 切换到首页
                document.querySelectorAll('.page').forEach(page => {
                    page.classList.remove('active');
                });
                document.getElementById('home').classList.add('active');
                
                alert('登录成功！');
            } else {
                alert('用户名或密码错误！');
            }
        });
        
        // 修复注册表单提交
        const registerForm = document.getElementById('registerForm');
        if (registerForm) registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('regUsername').value;
            const password = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('regConfirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('密码不匹配！');
                return;
            }
            
            if (username.length < 3) {
                alert('用户名至少需要3个字符！');
                return;
            }
            
            if (password.length < 6) {
                alert('密码至少需要6个字符！');
                return;
            }
            
            const users = JSON.parse(localStorage.getItem('users'));
            if (users.find(u => u.username === username)) {
                alert('用户名已存在！');
                return;
            }
            
            const newUser = {
                username: username,
                password: password,
                role: 'user',
                email: `${username}@example.com`
            };
            
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            
            localStorage.setItem('currentUser', JSON.stringify(newUser));
            checkLoginStatus();
            
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById('home').classList.add('active');
            
            alert('注册成功！');
        });
        
        // 修复退出登录
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('currentUser');
            checkLoginStatus();
            
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById('home').classList.add('active');
            
            alert('已退出登录！');
        });
        
        // 修复移动端菜单
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenuClose = document.getElementById('mobileMenuClose');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
        const mobileSettingsBtn = document.getElementById('mobileSettingsBtn');
        const mobileLoginBtn = document.getElementById('mobileLoginBtn');
        
        if (mobileMenuBtn && mobileMenu && mobileMenuOverlay) {
            mobileMenuBtn.addEventListener('click', function() {
                mobileMenu.classList.add('active');
                mobileMenuOverlay.classList.add('active');
            });
        }

        if (mobileMenuClose && mobileMenu && mobileMenuOverlay) {
            mobileMenuClose.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
            });
        }

        if (mobileMenuOverlay && mobileMenu) {
            mobileMenuOverlay.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
            });
        }

        if (mobileSettingsBtn && mobileMenu && mobileMenuOverlay && settingsPanel && settingsOverlay) {
            mobileSettingsBtn.addEventListener('click', function(e) {
                e.preventDefault();
                mobileMenu.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                settingsPanel.classList.add('active');
                settingsOverlay.classList.add('active');
            });
        }

        if (mobileLoginBtn && mobileMenu && mobileMenuOverlay && document.getElementById('login')) {
            mobileLoginBtn.addEventListener('click', function(e) {
                e.preventDefault();
                mobileMenu.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                document.querySelectorAll('.page').forEach(page => {
                    page.classList.remove('active');
                });
                document.getElementById('login').classList.add('active');
            });
        }
        
        // 激光动效交互
        const hero = document.querySelector('.hero');
        const laserBg = document.querySelector('.laser-bg');
        
        if (hero && laserBg) {
            hero.addEventListener('mousemove', (e) => {
                const rect = hero.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // 移动激光背景位置
                laserBg.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`;
                
                // 更新激光束的颜色和位置
                const beams = document.querySelectorAll('.laser-beam');
                beams.forEach((beam, index) => {
                    const intensity = 0.5 + (Math.sin(Date.now() * 0.001 + index) * 0.3);
                    beam.style.opacity = intensity;
                    beam.style.background = `linear-gradient(90deg, 
                        rgba(255, ${50 + index * 50}, ${150 + index * 30}, ${intensity}), 
                        rgba(${100 + index * 40}, 0, 255, ${intensity}))`;
                });
            });
            
            hero.addEventListener('mouseleave', () => {
                laserBg.style.transform = 'translate(0, 0)';
            });
        }
        
        // 保存网页初始源码，生成嵌入版时避免把登录状态、弹窗状态等运行时改动写进文件
        window.__ORIGINAL_HTML_SOURCE__ = '<!DOCTYPE html>\n' + document.documentElement.outerHTML;

        // 初始化
        initializeSettings();
        initializeUsers();
        checkLoginStatus();
        initializeGradientBlindsBackground();
        initialize3DCubes();
        initializeHistoryData();
        initializeEventData();
