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
      subtitle: 'Professional tennis coaching in Chino, California for players of all ages and skill levels.',
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
        price: '$45',
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
        description: 'With over 12 years of coaching experience, Coach Chris has helped hundreds of players reach their potential. From beginners learning their first strokes to competitive players refining their game, every student receives expert guidance tailored to their individual needs.',
      },
      philosophy: {
        title: 'Coaching Philosophy',
        description: 'Tennis should be challenging, rewarding, and fun. I focus on building strong fundamentals while developing each player\'s unique strengths. My approach emphasizes proper technique, strategic thinking, and mental toughness—all delivered in a positive, encouraging environment.',
      },
      development: {
        title: 'Player Development',
        description: 'Students consistently improve their technical skills, match performance, and love for the game. Many have gone on to play at competitive levels, earn spots on school teams, and achieve personal milestones they never thought possible.',
      },
      worksWith: {
        title: 'Who I Work With',
        categories: ['Beginners', 'Junior Players', 'High School Teams', 'Adult Players', 'Competitive Athletes'],
      },
    },
    videos: {
      title: 'Teaching Videos',
      subtitle: 'Learn from instructional content',
      categories: ['Forehand', 'Backhand', 'Serve', 'Footwork', 'Strategy', 'Kids'],
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
      },
      info: {
        phone: '(XXX) XXX-XXXX',
        location: 'Chino, California',
      },
      levels: ['Beginner', 'Intermediate', 'Advanced', 'Competitive'],
    },
    cta: {
      scheduleLesson: 'Schedule a Lesson',
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
      subtitle: 'Entrenamiento profesional de tenis en Chino, California para jugadores de todas las edades y niveles.',
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
        price: '$45',
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
        description: 'Con más de 12 años de experiencia como entrenador, Coach Chris ha ayudado a cientos de jugadores a alcanzar su potencial. Desde principiantes aprendiendo sus primeros golpes hasta jugadores competitivos perfeccionando su juego, cada estudiante recibe orientación experta adaptada a sus necesidades individuales.',
      },
      philosophy: {
        title: 'Filosofía de Entrenamiento',
        description: 'El tenis debe ser desafiante, gratificante y divertido. Me enfoco en construir fundamentos sólidos mientras desarrollo las fortalezas únicas de cada jugador. Mi enfoque enfatiza la técnica adecuada, el pensamiento estratégico y la fortaleza mental, todo entregado en un ambiente positivo y alentador.',
      },
      development: {
        title: 'Desarrollo del Jugador',
        description: 'Los estudiantes mejoran consistentemente sus habilidades técnicas, rendimiento en partidos y amor por el juego. Muchos han llegado a jugar a niveles competitivos, ganar lugares en equipos escolares y lograr hitos personales que nunca creyeron posibles.',
      },
      worksWith: {
        title: 'Con Quién Trabajo',
        categories: ['Principiantes', 'Jugadores Juveniles', 'Equipos Escolares', 'Jugadores Adultos', 'Atletas Competitivos'],
      },
    },
    videos: {
      title: 'Videos Instructivos',
      subtitle: 'Aprende del contenido educativo',
      categories: ['Derecha', 'Revés', 'Servicio', 'Juego de Pies', 'Estrategia', 'Niños'],
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
      },
      info: {
        phone: '(XXX) XXX-XXXX',
        location: 'Chino, California',
      },
      levels: ['Principiante', 'Intermedio', 'Avanzado', 'Competitivo'],
    },
    cta: {
      scheduleLesson: 'Agendar una Lección',
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
      subtitle: '加州奇诺专业网球教练，面向所有年龄和技能水平的球员。',
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
        price: '$45',
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
        description: '克里斯教练拥有超过12年的执教经验，帮助数百名球员发挥潜力。从学习第一次击球的初学者到完善比赛的竞技球员，每位学生都能获得针对其个人需求量身定制的专业指导。',
      },
      philosophy: {
        title: '执教理念',
        description: '网球应该具有挑战性、有成就感且有趣。我专注于建立扎实的基础，同时发展每位球员的独特优势。我的方法强调正确的技术、战略思维和心理韧性——所有这些都在积极鼓励的环境中提供。',
      },
      development: {
        title: '球员发展',
        description: '学生持续提高技术技能、比赛表现和对网球的热爱。许多人已经达到竞技水平，赢得校队位置，并实现了他们从未想过可能实现的个人里程碑。',
      },
      worksWith: {
        title: '教学对象',
        categories: ['初学者', '青少年球员', '高中校队', '成人球员', '竞技运动员'],
      },
    },
    videos: {
      title: '教学视频',
      subtitle: '从教学内容中学习',
      categories: ['正手', '反手', '发球', '步法', '策略', '儿童'],
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
      },
      info: {
        phone: '(XXX) XXX-XXXX',
        location: '加州奇诺',
      },
      levels: ['初学者', '中级', '高级', '竞技'],
    },
    cta: {
      scheduleLesson: '预约课程',
    },
    floating: {
      callText: '电话或短信',
    },
  },
};
