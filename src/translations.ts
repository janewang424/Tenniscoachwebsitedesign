export type Language = 'en' | 'es' | 'zh';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      lessons: 'Lessons',
      videos: 'Videos',
      highlights: 'Highlights',
      reviews: 'Reviews',
      contact: 'Contact',
    },
    hero: {
      title: 'Improve Faster. Play Smarter. Love the Game.',
      subtitle: 'Professional tennis coaching in Chino, Chino Hills, Eastvale, and Costa Mesa for players of all ages and skill levels.',
      scheduleCTA: 'Schedule a Lesson',
      callTextCTA: 'Call or Text',
    },
    stats: {
      experience: '12+ Years Experience',
      coachingSince: 'Coaching Since 2014',
      varsityCoach: 'Varsity Coach (5 Years)',
    },
    lessons: {
      title: 'Lessons & Pricing',
      subtitle: 'Personalized coaching tailored to your goals',
      private: {
        title: 'Private Lessons',
        subtitle: 'One-on-One Training',
        price: '$50',
        duration: 'per hour',
        features: [
          'Personalized instruction',
          'Technical improvement',
          'Strategic game development',
          'All skill levels welcome',
        ],
      },
      group: {
        title: 'Group Lessons',
        subtitle: '2+ Players',
        price: 'Contact',
        duration: 'for pricing',
        features: [
          'Team dynamics training',
          'Competitive drills',
          'High school team coaching',
          'Custom group programs',
        ],
      },
    },
    about: {
      title: 'About Coach Chris',
      subtitle: 'Experience & Philosophy',
      experience: {
        title: 'Experience & Background',
        description: 'Chris began playing tennis at age 13 and brings over 12 years of experience in competitive play and coaching, including teaching since 2014. He has competed in both high school and adult leagues and has spent the past five years as a high school varsity tennis coach, helping student-athletes develop strong fundamentals, match strategy, and confidence under real competitive conditions.',
        highlights: ['12+ years of competitive play & coaching', 'Teaching since 2014', '5 years as varsity tennis coach'],
      },
      philosophy: {
        title: 'Coaching Philosophy',
        description: 'Chris\'s coaching approach is deeply personal. Having navigated much of his own development through independent learning and match experience, he strives to be the coach he once needed — one who provides clear structure, honest feedback, and practical guidance. His goal is not just better strokes, but stronger, more resilient players.',
        highlights: ['Clear structure & honest feedback', 'Break down complex techniques into easy-to-understand steps', 'Build confidence and long-term love for the game'],
      },
      development: {
        title: 'Player Development & Student Outcomes',
        description: 'Chris has helped students across all levels achieve meaningful milestones in their tennis journeys, including making competitive high school tennis teams, improving consistency to compete confidently in adult match groups, and supporting college-level players seeking continued growth. Several students have continued their paths at respected institutions, including Mount San Antonio College (Mt. SAC), Riverside City College (RCC), and the University of Notre Dame.',
        highlights: ['Students made competitive high school teams', 'College players at Mt. SAC, RCC & Notre Dame', 'Long-term player development focus'],
      },
      worksWith: {
        title: 'Who I Work With',
        categories: ['Young children building fundamentals', 'Middle & High School students', 'College players', 'Adult players'],
      },
      lessonTypes: {
        title: 'Lesson Types',
        description: 'Chris offers private one-on-one lessons, small group training, and high school team coaching. Each session is structured, intentional, and focused on progress.',
        items: ['Private one-on-one lessons', 'Small group training', 'High school team coaching'],
      },
      location: {
        title: 'Location',
        description: 'Chris is based in Chino, California, and works with students and families throughout the surrounding communities.',
      },
    },
    videos: {
      title: 'Teaching Videos',
      subtitle: 'Learn from instructional content',
      categories: ['Forehand(Top Spin)', 'Backhand', 'Serve'],
    },
    highlights: {
      title: 'Highlight Moments',
      subtitle: 'Student achievements and milestones',
      items: [
        {
          title: 'Team Championship',
          description: 'Led varsity team to league championship',
          year: '2025',
        },
        {
          title: 'Junior Tournament Success',
          description: 'Students placed top 3 in regional tournaments',
          year: '2024',
        },
        {
          title: 'Player Advancement',
          description: '15+ students moved up to competitive divisions',
          year: '2024',
        },
      ],
    },
    reviews: {
      title: 'Reviews',
      subtitle: 'What students and parents say',
      items: [
        {
          name: 'Sarah Johnson',
          role: 'Parent',
          text: 'Coach Chris helped my daughter improve dramatically in just a few months. His patience and expertise made all the difference. She actually looks forward to practice now!',
          rating: 5,
        },
        {
          name: 'Mike Rodriguez',
          role: 'Junior Player',
          text: 'I went from barely hitting the ball over the net to winning matches in my school team. Coach Chris knows exactly how to break down every shot and make it click.',
          rating: 5,
        },
        {
          name: 'Jennifer Lee',
          role: 'Adult Student',
          text: 'As an adult beginner, I was nervous to start tennis. Coach Chris made me feel comfortable from day one and I\'ve made incredible progress. Highly recommend!',
          rating: 5,
        },
      ],
    },
    contact: {
      title: 'Schedule a Lesson',
      subtitle: 'Get started on your tennis journey',
      form: {
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone Number',
        age: 'Age',
        level: 'Skill Level',
        goals: 'Goals & Questions',
        availability: 'Preferred Availability',
        submit: 'Book a Lesson',
        freeCall: 'Book a Free 10-Minute Call',
        firstTimeOnly: '* First-time students only',
      },
      info: {
        phone: '(909) 247-0290',
        location: 'Chino, Chino Hills, Eastvale, Costa Mesa',
      },
      levels: ['Beginner', 'Intermediate', 'Advanced', 'Competitive'],
    },
    cta: {
      scheduleLesson: 'Schedule a Lesson',
      writeReview: 'Write a Review',
    },
    reviewModal: {
      title: 'Write a Review',
      name: 'Your Name',
      role: 'Your Role',
      rolePlaceholder: 'e.g., Parent, Student, Adult Player',
      review: 'Your Review',
      rating: 'Rating',
      submit: 'Submit Review',
      cancel: 'Cancel',
      thankYou: 'Thank you for your review!',
    },
    floating: {
      callText: 'Call or Text',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Acerca de',
      lessons: 'Lecciones',
      videos: 'Videos',
      highlights: 'Momentos Destacados',
      reviews: 'Reseñas',
      contact: 'Contacto',
    },
    hero: {
      title: 'Mejora Más Rápido. Juega Más Inteligente. Ama el Juego.',
      subtitle: 'Entrenamiento profesional de tenis en Chino, Chino Hills, Eastvale y Costa Mesa para jugadores de todas las edades y niveles.',
      scheduleCTA: 'Agendar una Lección',
      callTextCTA: 'Llamar o Enviar Mensaje',
    },
    stats: {
      experience: '12+ Años de Experiencia',
      coachingSince: 'Entrenando Desde 2014',
      varsityCoach: 'Entrenador Varsity (5 Años)',
    },
    lessons: {
      title: 'Lecciones y Precios',
      subtitle: 'Entrenamiento personalizado adaptado a tus objetivos',
      private: {
        title: 'Lecciones Privadas',
        subtitle: 'Entrenamiento Individual',
        price: '$50',
        duration: 'por hora',
        features: [
          'Instrucción personalizada',
          'Mejora técnica',
          'Desarrollo estratégico del juego',
          'Todos los niveles bienvenidos',
        ],
      },
      group: {
        title: 'Lecciones Grupales',
        subtitle: '2+ Jugadores',
        price: 'Contactar',
        duration: 'para precios',
        features: [
          'Entrenamiento de dinámica de equipo',
          'Ejercicios competitivos',
          'Entrenamiento de equipos escolares',
          'Programas grupales personalizados',
        ],
      },
    },
    about: {
      title: 'Acerca del Entrenador Chris',
      subtitle: 'Experiencia y Filosofía',
      experience: {
        title: 'Experiencia y Antecedentes',
        description: 'Chris comenzó a jugar tenis a los 13 años y aporta más de 12 años de experiencia en juego competitivo y entrenamiento, incluyendo enseñanza desde 2014. Ha competido tanto en ligas de secundaria como de adultos y ha pasado los últimos cinco años como entrenador varsity de tenis de secundaria, ayudando a estudiantes-atletas a desarrollar fundamentos sólidos, estrategia de partido y confianza bajo condiciones competitivas reales.',
        highlights: ['12+ años de juego competitivo y entrenamiento', 'Enseñando desde 2014', '5 años como entrenador varsity'],
      },
      philosophy: {
        title: 'Filosofía de Entrenamiento',
        description: 'El enfoque de entrenamiento de Chris es profundamente personal. Habiendo navegado gran parte de su propio desarrollo a través del aprendizaje independiente y experiencia en partidos, se esfuerza por ser el entrenador que una vez necesitó — uno que proporciona estructura clara, retroalimentación honesta y orientación práctica. Su objetivo no son solo mejores golpes, sino jugadores más fuertes y resilientes.',
        highlights: ['Estructura clara y retroalimentación honesta', 'Técnicas complejas en pasos fáciles', 'Construir confianza y amor por el juego'],
      },
      development: {
        title: 'Desarrollo del Jugador y Resultados',
        description: 'Chris ha ayudado a estudiantes de todos los niveles a alcanzar hitos significativos en sus viajes tenísticos, incluyendo hacer equipos competitivos de secundaria, mejorar consistencia para competir con confianza en grupos de partidos de adultos, y apoyar a jugadores de nivel universitario buscando crecimiento continuo. Varios estudiantes han continuado sus caminos en instituciones respetadas, incluyendo Mount San Antonio College (Mt. SAC), Riverside City College (RCC), y la Universidad de Notre Dame.',
        highlights: ['Estudiantes en equipos competitivos de secundaria', 'Jugadores universitarios en Mt. SAC, RCC y Notre Dame', 'Enfoque en desarrollo a largo plazo'],
      },
      worksWith: {
        title: 'Con Quién Trabajo',
        categories: ['Niños pequeños construyendo fundamentos', 'Estudiantes de secundaria y preparatoria', 'Jugadores universitarios', 'Jugadores adultos'],
      },
      lessonTypes: {
        title: 'Tipos de Lección',
        description: 'Chris ofrece lecciones privadas uno a uno, entrenamiento en grupos pequeños y entrenamiento de equipos de secundaria. Cada sesión es estructurada, intencional y enfocada en el progreso.',
        items: ['Lecciones privadas uno a uno', 'Entrenamiento en grupos pequeños', 'Entrenamiento de equipos de secundaria'],
      },
      location: {
        title: 'Ubicación',
        description: 'Chris está ubicado en Chino, California, y trabaja con estudiantes y familias en las comunidades circundantes.',
      },
    },
    videos: {
      title: 'Videos Instr',
      subtitle: 'Aprende del contenido educativo',
      categories: ['Derecha(Top Spin)', 'Revés', 'Servicio'],
    },
    highlights: {
      title: 'Momentos Destacados',
      subtitle: 'Logros e hitos de estudiantes',
      items: [
        {
          title: 'Campeonato del Equipo',
          description: 'Llevó al equipo varsity al campeonato de liga',
          year: '2025',
        },
        {
          title: 'Éxito en Torneos Juveniles',
          description: 'Estudiantes ubicados en el top 3 en torneos regionales',
          year: '2024',
        },
        {
          title: 'Avance de Jugadores',
          description: 'Más de 15 estudiantes ascendieron a divisiones competitivas',
          year: '2024',
        },
      ],
    },
    reviews: {
      title: 'Reseñas',
      subtitle: 'Lo que dicen estudiantes y padres',
      items: [
        {
          name: 'Sarah Johnson',
          role: 'Madre',
          text: 'Coach Chris ayudó a mi hija a mejorar dramáticamente en solo unos meses. Su paciencia y experiencia hicieron toda la diferencia. ¡Ahora ella espera con ansias las prácticas!',
          rating: 5,
        },
        {
          name: 'Mike Rodriguez',
          role: 'Jugador Juvenil',
          text: 'Pasé de apenas pasar la pelota por la red a ganar partidos en mi equipo escolar. Coach Chris sabe exactamente cómo descomponer cada golpe y hacerlo funcionar.',
          rating: 5,
        },
        {
          name: 'Jennifer Lee',
          role: 'Estudiante Adulta',
          text: 'Como principiante adulta, estaba nerviosa por comenzar tenis. Coach Chris me hizo sentir cómoda desde el primer día y he hecho un progreso increíble. ¡Altamente recomendado!',
          rating: 5,
        },
      ],
    },
    contact: {
      title: 'Agendar una Lección',
      subtitle: 'Comienza tu viaje en el tenis',
      form: {
        name: 'Nombre Completo',
        email: 'Correo Electrónico',
        phone: 'Número de Teléfono',
        age: 'Edad',
        level: 'Nivel de Habilidad',
        goals: 'Objetivos y Preguntas',
        availability: 'Disponibilidad Preferida',
        submit: 'Reservar una Lección',
        freeCall: 'Reservar una Llamada Gratuita de 10 Minutos',
        firstTimeOnly: '* Solo estudiantes nuevos',
      },
      info: {
        phone: '(909) 247-0290',
        location: 'Chino, Chino Hills, Eastvale, Costa Mesa',
      },
      levels: ['Principiante', 'Intermedio', 'Avanzado', 'Competitivo'],
    },
    cta: {
      scheduleLesson: 'Agendar una Lección',
      writeReview: 'Escribir una Reseña',
    },
    reviewModal: {
      title: 'Escribir una Reseña',
      name: 'Tu Nombre',
      role: 'Tu Rol',
      rolePlaceholder: 'ej., Padre, Estudiante, Jugador Adulto',
      review: 'Tu Reseña',
      rating: 'Calificación',
      submit: 'Enviar Reseña',
      cancel: 'Cancelar',
      thankYou: '¡Gracias por tu reseña!',
    },
    floating: {
      callText: 'Llamar o Mensaje',
    },
  },
  zh: {
    nav: {
      home: '首页',
      about: '关于',
      lessons: '课程',
      videos: '视频',
      highlights: '精彩时刻',
      reviews: '评价',
      contact: '联系',
    },
    hero: {
      title: '更快进步。更聪明比赛。热爱网球。',
      subtitle: '奇诺、奇诺岗、伊斯特维尔和科斯塔梅萨专业网球教练，面向所有年龄和技能水平的球员。',
      scheduleCTA: '预约课程',
      callTextCTA: '电话或短信',
    },
    stats: {
      experience: '12年以上经验',
      coachingSince: '2014年开始执教',
      varsityCoach: '校队教练（5年）',
    },
    lessons: {
      title: '课程与价格',
      subtitle: '根据您的目标量身定制的指导',
      private: {
        title: '私人课程',
        subtitle: '一对一训练',
        price: '$50',
        duration: '每小时',
        features: [
          '个性化指导',
          '技术改进',
          '策略性比赛发展',
          '欢迎所有技能水平',
        ],
      },
      group: {
        title: '团体课程',
        subtitle: '2名以上球员',
        price: '联系',
        duration: '获取价格',
        features: [
          '团队动态训练',
          '竞争性训练',
          '高中校队指导',
          '定制团体项目',
        ],
      },
    },
    about: {
      title: '关于克里斯教练',
      subtitle: '经验与理念',
      experience: {
        title: '经验与背景',
        description: '克里斯从13岁开始打网球，拥有超过12年的竞技比赛和教练经验，自2014年起开始教学。他参加过高中和成人联赛，并在过去五年担任高中校队网球教练，帮助学生运动员在真实的竞技条件下发展扎实的基本功、比赛策略和自信心。',
        highlights: ['12年以上竞技比赛和教练经验', '2014年起开始教学', '5年校队教练经验'],
      },
      philosophy: {
        title: '执教理念',
        description: '克里斯的教练方法非常个人化。通过独立学习和比赛经验完成大部分自我发展后，他努力成为自己曾经需要的那种教练——一个提供清晰结构、诚实反馈和实用指导的教练。他的目标不仅是更好的击球，而是培养更强大、更有韧性的球员。',
        highlights: ['清晰的结构和诚实的反馈', '将复杂技术分解为易懂步骤', '建立信心和对网球的长期热爱'],
      },
      development: {
        title: '球员发展与学生成果',
        description: '克里斯帮助各个水平的学生在网球之旅中取得有意义的里程碑，包括进入竞技高中网球队、提高稳定性以自信地参加成人比赛、以及支持大学级球员寻求持续成长。多名学生已在知名院校继续他们的道路，包括圣安东尼奥山学院(Mt. SAC)、河滨城市学院(RCC)和圣母大学。',
        highlights: ['学生进入竞技高中网球队', '大学球员就读于Mt. SAC、RCC和圣母大学', '专注于长期球员发展'],
      },
      worksWith: {
        title: '教学对象',
        categories: ['打基础的儿童', '初高中学生', '大学球员', '成人球员'],
      },
      lessonTypes: {
        title: '课程类型',
        description: '克里斯提供一对一私人课程、小组训练和高中校队教练。每节课都是结构化的、有目的的，并专注于进步。',
        items: ['一对一私人课程', '小组训练', '高中校队教练'],
      },
      location: {
        title: '位置',
        description: '克里斯位于加州奇诺，与周边社区的学生和家庭合作。',
      },
    },
    videos: {
      title: '教学视频',
      subtitle: '从教学内容中学习',
      categories: ['正手(上旋球)', '反手', '发球'],
    },
    highlights: {
      title: '精彩时刻',
      subtitle: '学生成就与里程碑',
      items: [
        {
          title: '团队冠军',
          description: '带领校队赢得联赛冠军',
          year: '2025',
        },
        {
          title: '青少年锦标赛成功',
          description: '学生在地区锦标赛中获得前三名',
          year: '2024',
        },
        {
          title: '球员晋级',
          description: '15名以上学生晋升到竞技组',
          year: '2024',
        },
      ],
    },
    reviews: {
      title: '评价',
      subtitle: '学生和家长的评价',
      items: [
        {
          name: 'Sarah Johnson',
          role: '家长',
          text: '克里斯教练帮助我女儿在短短几个月内显著提高。他的耐心和专业知识起到了决定性作用。她现在真的很期待训练！',
          rating: 5,
        },
        {
          name: 'Mike Rodriguez',
          role: '青少年球员',
          text: '我从几乎无法将球击过网到在校队比赛中获胜。克里斯教练确切知道如何分解每一次击球并让它奏效。',
          rating: 5,
        },
        {
          name: 'Jennifer Lee',
          role: '成人学生',
          text: '作为一个成年初学者，我开始网球时很紧张。克里斯教练从第一天就让我感到舒适，我取得了令人难以置信的进步。强烈推荐！',
          rating: 5,
        },
      ],
    },
    contact: {
      title: '预约课程',
      subtitle: '开始您的网球之旅',
      form: {
        name: '全名',
        email: '电子邮件',
        phone: '电话号码',
        age: '年龄',
        level: '技能水平',
        goals: '目标与问题',
        availability: '首选时间',
        submit: '预订课程',
        freeCall: '预约免费10分钟通话',
        firstTimeOnly: '* 仅限首次学员',
      },
      info: {
        phone: '(909) 247-0290',
        location: '奇诺, 奇诺岗, 伊斯特维尔, 科斯塔梅萨',
      },
      levels: ['初学者', '中级', '高级', '竞技'],
    },
    cta: {
      scheduleLesson: '预约课程',
      writeReview: '撰写评价',
    },
    reviewModal: {
      title: '撰写评价',
      name: '您的姓名',
      role: '您的身份',
      rolePlaceholder: '例如：家长、学生、成人球员',
      review: '您的评价',
      rating: '评分',
      submit: '提交评价',
      cancel: '取消',
      thankYou: '感谢您的评价！',
    },
    floating: {
      callText: '电话或短信',
    },
  },
};
