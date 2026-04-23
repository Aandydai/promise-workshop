var WordRoots = [
  {
    id: 1,
    root: "关系代词 who / whom（指人）",
    origin: "关系代词体系",
    meaning: "在定语从句中指人，分别作主语（who）和宾语（whom）",
    description: "who 是最常用的指人关系代词，在从句中作主语，不能省略。whom 同样指人但在从句中作宾语，可被 who 替代，在口语和非正式文体中常被省略。高考中 who 的考查频率远高于 whom，理解 who 既可作主语也可通过省略机制充当宾语是解题关键。",
    examples: [
      { word: "The boy who helped us is a student.", meaning: "帮助我们的那个男孩是一名学生。", breakdown: { root: "who 在从句中作主语" }, explanation: "who 指代 the boy，在从句中充当主语，从句谓语 helped 由此发出。注意 who 不能省略，因为它是主语成分。" },
      { word: "The teacher (whom) we respect greatly retired.", meaning: "我们非常尊敬的那位老师退休了。", breakdown: { root: "whom 在从句中作宾语，可省略" }, explanation: "whom 指代 the teacher，在从句中作 respect 的宾语。由于是宾语，在口语或非正式文体中可以省略 whom，使用 who 亦可。" },
      { word: "Do you know the man who is speaking at the meeting?", meaning: "你认识那个在会上发言的人吗？", breakdown: { root: "who 作从句主语，不可省略" }, explanation: "who 在从句中作 is speaking 的主语。主语成分不可省略，who 不能删去。解题时先判断关系词在从句中的成分，再决定能否省略。" }
    ],
    quiz: { question: "选出含有正确关系代词用法的句子：", options: ["The girl who she won the prize is my sister.", "The girl who won the prize is my sister.", "The girl won the prize is my sister.", "The girl that she won the prize is my sister."], correctAnswer: 1 }
  },
  {
    id: 2,
    root: "关系代词 which（指物）",
    origin: "关系代词体系",
    meaning: "在定语从句中指物，可作主语或宾语",
    description: "which 是专门指物（也可指代整个主句）的关系代词。在从句中可以作主语（不可省略）、宾语（可省略）或介词宾语。高考中 which 与 that 的区别是高频考点，尤其在只能使用 which 的情形（介词后、非限制性从句、代表整个句子）中需重点掌握。",
    examples: [
      { word: "The book which interests children most is on the desk.", meaning: "最受孩子们欢迎的那本书在桌子上。", breakdown: { root: "which 作从句主语，不可省略" }, explanation: "which 指代 the book，在从句中作主语，interests 由此发出。主语位置的 which 不可省略。" },
      { word: "The film (which) we watched yesterday was excellent.", meaning: "我们昨天看的那部电影非常精彩。", breakdown: { root: "which 作从句宾语，可以省略" }, explanation: "which 指代 the film，在从句中作 watched 的宾语。作宾语时 which 可省略，这也是高考中最常见的考点之一。" },
      { word: "The room in which we held the meeting was small.", meaning: "我们开会的那间房间很小。", breakdown: { root: "which 与介词连用，which 不可省略" }, explanation: "which 前置于介词 in，此时 which 不可省略，也不能用 that 替代。这是介词加关系代词结构的典型用法。" }
    ],
    quiz: { question: "以下哪个句子中 which 不能用 that 替换？", options: ["The book (which) I bought yesterday is interesting.", "The room in which we studied was quiet.", "The apple which is red is sweet.", "The letter which came this morning is important."], correctAnswer: 1 }
  },
  {
    id: 3,
    root: "关系代词 that（指人/物）",
    origin: "关系代词体系",
    meaning: "万能关系代词，既可指人也可指物，多用于限制性定语从句",
    description: "that 是使用范围最广的关系代词，可指人也可指物，通常用于限制性定语从句。它不能用于非限制性定语从句（不能用逗号隔开的那种），也不能用在介词之后。高考中常考 that 与 which 的互换选择，以及只能用 that 的特定情境（不定代词、最高级、序数词等前）。",
    examples: [
      { word: "The student that answers correctly will get a reward.", meaning: "正确回答问题的学生将获得奖励。", breakdown: { root: "that 指人，作从句主语" }, explanation: "that 指代 the student，在从句中作主语。此处 that 可替换为 who，但 that 更简洁。" },
      { word: "Is this the watch that you lost last week?", meaning: "这是你上周丢失的那块手表吗？", breakdown: { root: "that 指物，作从句宾语，可省略" }, explanation: "that 指代 the watch，在从句中作 lost 的宾语。作宾语时 that 可以省略，这在口语中很常见。" },
      { word: "All that glitters is not gold.", meaning: "闪光的不一定都是金子。", breakdown: { root: "that 指物，先行词是不定代词 all" }, explanation: "that 跟在不定代词 all 之后，指代所有发光的东西。这是高考高频考点——不定代词后只能用 that。" }
    ],
    quiz: { question: "All ____ glitters is not gold. 空格处应填：", options: ["which", "who", "that", "whom"], correctAnswer: 2 }
  },
  {
    id: 4,
    root: "关系代词 whose（所有格）",
    origin: "关系代词体系",
    meaning: "表示所有关系，指代人或物的所属关系",
    description: "whose 是表示所有格的关系代词，相当于某人的 / 某物的。它可以指人也可以指物，在从句中作定语修饰名词。whose 后紧跟名词（如 whose book, whose name）。与 of which 结构可以互换（the book of which = whose book），但 whose 更简洁，在高考书面表达中也更受青睐。",
    examples: [
      { word: "The girl whose hair is long is my classmate.", meaning: "那个长头发的女孩是我的同学。", breakdown: { root: "whose 指人，修饰 hair" }, explanation: "whose 指代 the girl，在从句中作 hair 的定语，表示那个女孩的头发长。whose 不可省略。" },
      { word: "I visited the factory whose products are famous worldwide.", meaning: "我参观了那家产品闻名全球的工厂。", breakdown: { root: "whose 指物，修饰 products" }, explanation: "whose 指代 the factory，在从句中作 products 的定语，表示那家工厂的产品。whose 指物时等于 of which，但更简洁。" },
      { word: "The house whose windows face south is very bright.", meaning: "窗户朝南的那栋房子很明亮。", breakdown: { root: "whose 指物，whose windows = the windows of which" }, explanation: "whose windows 等同于 the windows of which，但 whose 更地道。注意 whose 位置在名词之前，不需要介词。" }
    ],
    quiz: { question: "I live in a room ____ windows face the sea. 空格处应填：", options: ["which", "that", "whose", "who"], correctAnswer: 2 }
  },
  {
    id: 5,
    root: "关系副词 when（时间）",
    origin: "关系副词体系",
    meaning: "在定语从句中作时间状语，先行词为时间名词",
    description: "when 是表示时间的关系副词，在从句中作时间状语，修饰说明某事发生的时间。它的先行词通常是时间名词（day, year, time, moment 等）。when 在限制性定语从句中可以省略（尤其在 the day / the year / the time 等之后），这一特性在高考阅读理解和写作中都很重要。",
    examples: [
      { word: "I still remember the day when I first came to this school.", meaning: "我仍然记得第一次来这所学校的那一天。", breakdown: { root: "when 作从句时间状语" }, explanation: "when 指代 the day，在从句中作 came 的时间状语。when = on which，此处可替换为 on which。先行词是 the day，属于时间名词。" },
      { word: "The year when she was born was 2008.", meaning: "她出生那年是2008年。", breakdown: { root: "when 引导时间定语从句" }, explanation: "when 指代 the year，在从句中作时间状语修饰 was born。注意 when 不能省略，因为 the year 在此不省略。" },
      { word: "That was the moment when everything changed.", meaning: "那是一切改变的时刻。", breakdown: { root: "when = at which，指代 moment" }, explanation: "when 指代 the moment，在从句中作时间状语，等于 at which。the moment, the time, the day 等词后 when 可以省略，只保留那或当时的感觉。" }
    ],
    quiz: { question: "The day ____ I met her was a sunny afternoon. 空格处应填：", options: ["which", "when", "where", "that"], correctAnswer: 1 }
  },
  {
    id: 6,
    root: "关系副词 where（地点）",
    origin: "关系副词体系",
    meaning: "在定语从句中作地点状语，先行词为地点名词",
    description: "where 是表示地点的关系副词，在从句中作地点状语，先行词通常是地点名词（place, room, city, country 等）。where = at/in/on which，在限制性定语从句的口语中可省略。高考中需特别注意 where 与介词加 which 的互换，以及在 the place where 这样的结构中不能把 where 换成 that。",
    examples: [
      { word: "This is the village where I grew up.", meaning: "这是我长大的那个村子。", breakdown: { root: "where 作从句地点状语" }, explanation: "where 指代 the village，在从句中作 grew up 的地点状语，等于 in which。village 是地点名词，所以用 where。" },
      { word: "The school where we studied was founded in 1990.", meaning: "我们读书的那所学校建于1990年。", breakdown: { root: "where = at which / in which" }, explanation: "where 在从句中作地点状语，等于 at which 或 in which。where 不能省略，但可用 in/at which 替换。" },
      { word: "I will never forget the place where we first met.", meaning: "我永远不会忘记我们第一次相遇的地方。", breakdown: { root: "where 引导地点定语从句" }, explanation: "where 指代 the place，在从句中作 met 的地点状语。the place where 结构中，where 不可省略，也不能用 that 替换（除非去掉 the place）。" }
    ],
    quiz: { question: "The city ____ I was born is very beautiful. 空格处应填：", options: ["which", "where", "that", "when"], correctAnswer: 1 }
  },
  {
    id: 7,
    root: "关系副词 why（原因）",
    origin: "关系副词体系",
    meaning: "在定语从句中作原因状语，先行词为 reason",
    description: "why 是表示原因的关系代词，先行词固定为 reason（理由），在从句中作原因状语。why = for which，在 the reason why 句型中 that 可替代 why（但 why 本身不能换成 that），在口语中 why 可省略。高考常考 the reason why ... is that ... 结构。",
    examples: [
      { word: "The reason why he was late is that he missed the bus.", meaning: "他迟到的原因是他没赶上公交车。", breakdown: { root: "why 作从句原因状语，先行词是 reason" }, explanation: "why 指代 the reason，在从句中作原因状语，等于 for which。reason 后必须用 why（不用 that 替代 why 本身）。" },
      { word: "That is the reason why I came here.", meaning: "那就是我来这里的原因。", breakdown: { root: "why 引导原因定语从句" }, explanation: "why 指代 the reason，在从句中作原因状语。这是标准 the reason why 句型。注意 why 不能换成 that，因为 that 在此不作状语。" },
      { word: "I don't know the reason (why) he refused the offer.", meaning: "我不知道他拒绝这个提议的原因。", breakdown: { root: "why 可省略的口语用法" }, explanation: "在口语和非正式文体中，why 可省略。但在书面语和高考中，the reason why 是固定搭配，不省略更规范。" }
    ],
    quiz: { question: "Can you explain the reason ____ he left so early? 空格处应填：", options: ["which", "why", "that", "what"], correctAnswer: 1 }
  },
  {
    id: 8,
    root: "限制性定语从句",
    origin: "从句类型",
    meaning: "对先行词进行必要修饰说明，从句不可或缺",
    description: "限制性定语从句是定语从句的常规形式，对先行词进行限制性修饰，去掉后主句意思不完整或不明确。它与主句之间不用逗号隔开。关系词在限制性从句中有时可省略（作宾语时）。高考阅读中，限制性定语从句占绝对多数，写作中也更常用限制性而非非限制性形式。",
    examples: [
      { word: "Students who work hard will succeed.", meaning: "努力学习的学生会成功。", breakdown: { root: "限制性定语从句，无逗号隔开" }, explanation: "who work hard 是限制性定语从句，修饰 students。若去掉此从句，Students will succeed意思依然成立但范围变宽，失去了努力学习这层限定。" },
      { word: "The book that interests me most is on the shelf.", meaning: "最让我感兴趣的那本书在书架上。", breakdown: { root: "限制性从句，无逗号，that 不可省" }, explanation: "that interests me most 限制 the book 的范围，去掉后句子仍然成立但语义模糊。限制性从句的关系词在作宾语时可省（此句作主语，不可省）。" },
      { word: "I have a friend whose father is a doctor.", meaning: "我有一个父亲是医生的朋友。", breakdown: { root: "限制性从句，whose 作定语修饰 father" }, explanation: "whose father is a doctor 限制 friend 的范围。注意 whose 在此作定语修饰 father，去掉此从句，I have a friend意思成立但丢失了关键信息。whose 不可省略。" }
    ],
    quiz: { question: "限制性定语从句与主句之间是否有逗号？", options: ["有逗号", "没有逗号", "可有可无", "取决于关系词类型"], correctAnswer: 1 }
  },
  {
    id: 9,
    root: "非限制性定语从句",
    origin: "从句类型",
    meaning: "对先行词进行补充说明，去掉后主句意思仍然完整",
    description: "非限制性定语从句用逗号与主句隔开，对先行词起补充说明作用，去掉后主句意思仍然完整、仍然成立。不能用 that 引导（这是高考高频考点）。which 引导的非限制性从句可以指代整个主句（这是完形填空和阅读理解的重要考点），此时 which = and this/and that。",
    examples: [
      { word: "My mother, who is a teacher, works at this school.", meaning: "我妈妈是老师，她在这所学校工作。", breakdown: { root: "非限制性从句，有逗号，补充说明" }, explanation: "who is a teacher 是非限制性定语从句，两侧有逗号。它只是补充说明我妈妈的身份，去掉后句子依然完整。注意 who 不能换成 that。" },
      { word: "The concert, which lasted two hours, was wonderful.", meaning: "那场持续两小时的音乐会很精彩。", breakdown: { root: "非限制性定语从句 which 修饰主语" }, explanation: "which lasted two hours 修饰 The concert，去掉后 The concert was wonderful 意思仍然成立。which 引导非限制性从句时相当于 and it，不可用 that 替换。" },
      { word: "He passed the exam, which surprised everyone.", meaning: "他通过了考试，这让每个人都惊讶。", breakdown: { root: "which 指代整个主句" }, explanation: "which 在此指代整个主句 He passed the exam，在从句中作主语，等于 and this/and that。高考阅读中 this/which 指代前文整个事件是高频考点。which 绝不能用 that 替换。" }
    ],
    quiz: { question: "非限制性定语从句中，哪种关系词不能使用？", options: ["who", "which", "that", "whom"], correctAnswer: 2 }
  },
  {
    id: 10,
    root: "as 引导的定语从句",
    origin: "特殊关系词",
    meaning: "as 引导定语从句，可指代整个主句，多见于固定搭配和名言警句",
    description: "as 作为关系代词可以引导定语从句，既可指代整个主句（与 which 等价），也可指代主句中的某个名词（多见于 such ... as, the same ... as 等结构）。as 引导非限制性从句时，主句在前，as 在后；which 引导时两者可互换但位置不同。高考常考 such as, the same as, as we all know 等固定搭配。",
    examples: [
      { word: "As we all know, the earth moves around the sun.", meaning: "众所周知，地球围绕太阳转。", breakdown: { root: "as 指代整个主句，位于句首" }, explanation: "as we all know 是非限制性定语从句，as 指代后面整个句子。as 位于句首可用 which 替换，但 which 不能放句首。此句型在写作中可用于引出观点。" },
      { word: "Such students as work hard will pass the exam.", meaning: "像这样努力学习的学生都会通过考试。", breakdown: { root: "as 作从句主语，such ... as 搭配" }, explanation: "as 在从句中作主语，指代 students。such ... as 意为像...这样的，是高考高频搭配。勿与 such ... that（结果状语从句）混淆。" },
      { word: "He is the same person as I met yesterday.", meaning: "他就是我昨天遇到的那个人。", breakdown: { root: "the same ... as 搭配，as 作从句宾语" }, explanation: "as 指代 the same person，在从句中作 met 的宾语。the same ... as 表示同一个人或物，the same ... that 表示同一个（完全相同），两者含义有微妙区别。" }
    ],
    quiz: { question: "This is the same bag ____ I lost yesterday. 空格处应填：", options: ["which", "as", "that", "what"], correctAnswer: 1 }
  },
  {
    id: 11,
    root: "but 否定关系结构",
    origin: "特殊关系词",
    meaning: "but 作关系代词，相当于 who/that ... not",
    description: "but 是高考中较冷门的特殊关系代词，等于 who/that ... not，表示没有...不的双重否定含义。结构为名词加 but 加定语从句（肯定形式），but 本身带有否定意义。常见于 There is no ... but ... 等结构。理解 but 的否定关系是破解此类题型的关键。",
    examples: [
      { word: "There is no rule but has some exceptions.", meaning: "任何规则都有例外。", breakdown: { root: "but = that/which ... not" }, explanation: "but 在此等于 that/which ... not。No rule but has exceptions = No rule that does not have exceptions。but 的使用让句子简洁且富有文采。" },
      { word: "There is nobody but knows him.", meaning: "没有人不认识他。", breakdown: { root: "but = who does not know" }, explanation: "nobody but knows him = nobody who does not know him。but 使句子简洁，高考中此类题需注意 but 的否定含义。" },
      { word: "Not a single student but passed the exam.", meaning: "没有一个学生没通过考试。", breakdown: { root: "but = who did not" }, explanation: "Not a single student but passed = Not a single student who did not pass。but 的否定结构在书面表达中也可用，提升语言层次。" }
    ],
    quiz: { question: "There is no one in the class but ____ him. 空格处应填：", options: ["knows", "knowing", "knew", "know"], correctAnswer: 0 }
  },
  {
    id: 12,
    root: "than 作为关系词",
    origin: "特殊关系词",
    meaning: "than 可作关系代词/副词，用于比较结构中",
    description: "than 除了作连词表示比之外，还可作关系词引导定语从句，此时 than 具有关系代词或关系副词的双重功能。than 引导的定语从句通常修饰含有比较级的名词（如 more, better, younger 等）。高考中需识别 than 的关系词功能，不能简单按比较状语从句理解。",
    examples: [
      { word: "Don't make a promise than you can keep.", meaning: "不要做出你无法兑现的承诺。", breakdown: { root: "than = that which" }, explanation: "a promise than you can keep = a promise that which you can keep。than 在此等于 that which，在从句中作 keep 的宾语。高考阅读中识别这种省略结构很重要。" },
      { word: "You are a better player than I was at your age.", meaning: "你这个年纪时比我强。", breakdown: { root: "than 引导定语从句，省略了 I was" }, explanation: "than I was at your age = than what I was at your age。than 引导的定语从句修饰 a better player，理解这一点有助于准确把握句意。" },
      { word: "There are more books here than needed.", meaning: "这里的书比需要的还多。", breakdown: { root: "than needed = than what is needed" }, explanation: "than needed = than what is needed。than 后省去了 what is，理解这种省略结构对阅读理解很重要。" }
    ],
    quiz: { question: "There are more books here than ____ needed.", options: ["is", "are", "were", "has"], correctAnswer: 1 }
  },
  {
    id: 13,
    root: "介词 + 关系代词",
    origin: "特殊结构",
    meaning: "关系代词前接介词，构成介词短语在从句中作状语",
    description: "介词加关系代词是高考高频考点。whom/which/whose 均可与介词连用，介词决定从句的语法关系。介词后可跟 which（指物）或 whom（指人），但不能跟 that。介词的选择取决于语义（固定搭配或语境）和先行词。关系代词在介词后不能省略，这是解题关键。",
    examples: [
      { word: "The professor whom we talked about is very famous.", meaning: "我们谈论的那位教授非常有名。", breakdown: { root: "介词 about 后用 whom，口语中保留动词后" }, explanation: "about whom = whom we talked about。介词 about 决定了谈论的对象。口语中通常把介词放在动词后，此时 whom 可省略。" },
      { word: "The building whose roof is blue is our library.", meaning: "那栋蓝色屋顶的建筑是我们的图书馆。", breakdown: { root: "whose = of which，whose 本身即所有格，无需介词" }, explanation: "whose roof = of which the roof = the roof of which。whose 是所有格自带介词性质，无需额外介词。whose 引导的定语从句是介词加关系代词的一种替代形式。" },
      { word: "The room in which we studied was small.", meaning: "我们学习的那个房间很小。", breakdown: { root: "in which = where，in 表示地点关系" }, explanation: "in which we studied = where we studied。介词 in 决定了 studied 发生的地点。介词选择取决于动词与名词的语义搭配。" }
    ],
    quiz: { question: "The woman ____ he married is a doctor. 空格处应填：", options: ["who", "whom", "to whom", "that"], correctAnswer: 2 }
  },
  {
    id: 14,
    root: "关系词在从句中作主语",
    origin: "从句成分分析",
    meaning: "关系词作主语时不能省略；决定谓语的单复数形式",
    description: "关系词在从句中作主语是最基础也是最重要的语法点。作主语时，关系词不能省略。高考中常考通过分析从句结构判断关系词作主语还是宾语的题型。若从句谓语为复数而主句名词为单数，则关系词一定作宾语（主语不可能与谓语单复数不一致）。理解主语位置关系词不可省是解题关键。",
    examples: [
      { word: "The man who called this morning has left.", meaning: "今天早上打电话的那个人已经离开了。", breakdown: { root: "who 作从句主语，后接 has left" }, explanation: "who 在从句中作主语，called 由此发出。主语位置的 who 不可省略。若误以为 who 是宾语而省略，会导致主语缺失的语法错误。" },
      { word: "The books which belong to the library must be returned.", meaning: "属于图书馆的书必须归还。", breakdown: { root: "which 作从句主语，后接 belong" }, explanation: "which 在从句中作 belong to 的主语，belong to 是动词短语。不要将 belong 误判为介词而错误地把 which 当作介词宾语。which 是 belong 的逻辑主语。" },
      { word: "Anyone who breaks the rules will be punished.", meaning: "任何违反规则的人都会受到处罚。", breakdown: { root: "who 作从句主语，先行词是 anyone" }, explanation: "anyone 是不定代词，后接定语从句理论上用 that，但实际高考中有时也出现 who。关键判断：who 在从句中作主语，不可省略。" }
    ],
    quiz: { question: "The children ____ are playing in the park are very happy. 空格处应填：", options: ["who", "whose", "whom", "which"], correctAnswer: 0 }
  },
  {
    id: 15,
    root: "关系词在从句中作宾语",
    origin: "从句成分分析",
    meaning: "作宾语时关系词可省略（限制性从句），是高考简化题型的常考点",
    description: "关系词在从句中作宾语时，在限制性定语从句中可以省略。省略后的句子在口语和非正式文体中极为常见。高考阅读理解中，大量句子使用了宾语关系词的省略，正确还原被省略的关系词是准确理解句意的关键。判断关系词是否作宾语，需看从句中是否有完整的主谓结构。",
    examples: [
      { word: "The film (which/that) we watched last night was great.", meaning: "我们昨晚看的那部电影很棒。", breakdown: { root: "which/that 作 watched 的宾语，可省略" }, explanation: "还原后：The film which/that we watched last night was great。we watched 是完整主谓结构，which/that 在其中作 watched 的宾语。口语中 which/that 常省略，写作中根据语境决定是否省略。" },
      { word: "The man (whom/who/that) I interviewed yesterday is famous.", meaning: "我昨天采访的那个人很有名。", breakdown: { root: "whom/who/that 作 interviewed 的宾语，可省略" }, explanation: "I interviewed 是完整主谓结构，三种关系词均可使用且均可省略。指人时 whom/who/that 三者均可作宾语，口语中最常用 who 或省略。" },
      { word: "The letter (which/that) I received this morning surprised me.", meaning: "今早收到的那封信让我惊讶。", breakdown: { root: "which/that 作 received 的宾语" }, explanation: "I received 是完整主谓结构，which/that 作 received 的宾语。高考阅读中，the letter I received = the letter which I received，理解省略形式至关重要。" }
    ],
    quiz: { question: "The song ____ she sang at the party was beautiful. 空格处关系词能否省略？", options: ["可以省略", "不可以省略", "只有省略才正确", "必须用 that"], correctAnswer: 0 }
  },
  {
    id: 16,
    root: "关系词在从句中作表语",
    origin: "从句成分分析",
    meaning: "关系词作表语，通常指人，结构较为少见",
    description: "关系词在从句中作表语，即 be 动词后的表语成分，这种用法相对少见但高考中偶有涉及。作表语的关系词不能省略，通常指人（用 who/that），不能指物。常见于 The person ... is ... 结构中，需准确识别。",
    examples: [
      { word: "He is no longer the man that he used to be.", meaning: "他已经不是以前的他了。", breakdown: { root: "that 作从句表语，指人" }, explanation: "that 在从句中作 be 的表语，指代 the man。that 不可省略。注意 he used to be 是完整结构，that 就是 be 的表语。注意此句中的 that 指人，不能换成 who。" },
      { word: "She is becoming the doctor that she wanted to be.", meaning: "她正在成为她曾经想成为的那种医生。", breakdown: { root: "that 既指人又作 be 的表语" }, explanation: "第一个 that 指代 the doctor，在从句中作 be 的表语；第二个 that 是连词，引导 wanted to be 的内容。理解 the doctor that she wanted to be = the doctor who/whom she wanted to become 很有必要。" },
      { word: "That is all that can be done now.", meaning: "这就是现在所能做的一切了。", breakdown: { root: "that 作表语，all 后接 that 定语从句" }, explanation: "that 在从句中作 be 的表语，指代 all。all 后接 that 定语从句（again: 不定代词后只用 that）。注意第二个 that 是关系词，第一个 that 是指示代词。" }
    ],
    quiz: { question: "He is not the boy ____ he was ten years ago. 空格处应填：", options: ["which", "who", "that", "when"], correctAnswer: 2 }
  },
  {
    id: 17,
    root: "which 与 that 的区别",
    origin: "高频考点对比",
    meaning: "that 比 which 更通用；which 在特定情况下不可替换",
    description: "which 与 that 的区别是高考最热门考点之一。总体原则：限制性从句中两者可互换（除了只能用 that 的情况）；非限制性从句中只能用 which（绝不能用 that）。which 独有的三种情况：介词后、引导非限制性从句指代整个主句、描述性（非限制性）语境。正确区分语境是解题关键。",
    examples: [
      { word: "限制性：The book (which/that) I read is interesting.", meaning: "我读的那本书很有趣。", breakdown: { root: "限制性从句中 which=that，可互换" }, explanation: "在限制性定语从句中，which 和 that 绝大多数情况下可以互换，口语中 that 更常用。此句中两者均可省略。" },
      { word: "非限制性：The book, which I bought yesterday, is interesting.", meaning: "那本书，我昨天买的，很有趣。", breakdown: { root: "非限制性从句，只能用 which，不能用 that" }, explanation: "有逗号等于非限制性定语从句，必须用 which，不能用 that。此处 which 不能省略也不能替换。高考高频陷阱：不要在非限制性从句中误用 that。" },
      { word: "指代全句：He didn't pass the exam, which surprised us all.", meaning: "他没通过考试，这让所有人都惊讶。", breakdown: { root: "which 指代全句主句内容，只能用 which" }, explanation: "which 在此指代他没通过考试这一整件事，作 surprised 的主语。只能用 which，不能用 that。这是阅读理解中理解句子逻辑关系的高频考点。" }
    ],
    quiz: { question: "非限制性定语从句中，哪组关系词是绝对正确的？", options: ["...the book, that I like...", "...the book, which I like...", "...the book, who I like...", "...the book, what I like..."], correctAnswer: 1 }
  },
  {
    id: 18,
    root: "只能用 that 的情况",
    origin: "高频考点对比",
    meaning: "特定先行词和语境强制使用 that，不能换成 which 或 who",
    description: "高考最常考的限制性定语从句规则：先行词为 all, everything, something, nothing, anything, little, much, none, the only, the very, the same, the last, 序数词, 最高级时，必须用 that。这类题型的解题关键是先判断先行词的特征词，再确定必须用 that。理解这一规则可在完形填空和语法填空中快速排除干扰选项。",
    examples: [
      { word: "All that glitters is not gold. (先行词是不定代词 all)", meaning: "闪光的不一定都是金子。", breakdown: { root: "不定代词 all 后必须用 that" }, explanation: "all 是不定代词，其后的限制性定语从句必须用 that 引导，不能用 which。类似的不定代词还有 everything, something, nothing, anything 等，强制记忆。" },
      { word: "This is the very book that I lost. (先行词有 the very 修饰)", meaning: "这正是我丢的那本书。", breakdown: { root: "the very 后必须用 that" }, explanation: "the very = exactly the，强调唯一性，the very 后只能接 that，不能用 which。类似的限定词还有 the only, the last, the first 等。高考中见到 the very/only/last/first 等需立即反应必须用 that。" },
      { word: "The only thing that matters is your health.", meaning: "唯一重要的是你的健康。", breakdown: { root: "the only 后必须用 that" }, explanation: "the only 强调唯一性，其后的定语从句必须用 that。The only thing that matters = 唯一重要的东西。the only 提示必须选 that，which 是干扰项。" }
    ],
    quiz: { question: "This is the best film ____ has been made this year. 空格处应填：", options: ["which", "that", "who", "whom"], correctAnswer: 1 }
  },
  {
    id: 19,
    root: "嵌套定语从句",
    origin: "从句结构",
    meaning: "一个句子中包含两个或多个定语从句，层层修饰",
    description: "嵌套定语从句指一个先行词后接一个定语从句，而该从句中又包含另一个修饰其中某个成分的定语从句。阅读理解中嵌套从句极为常见，是造成句子理解困难的主要原因。解题关键是层层拆解，先找最内层从句，再逐层向外还原主句结构。",
    examples: [
      { word: "The teacher who taught the student who won the prize is my uncle.", meaning: "教那个获奖学生的老师是我叔叔。", breakdown: { root: "两个 who 引导的嵌套定语从句" }, explanation: "结构拆解：The teacher → (who taught the student) → (who won the prize)。第一个 who 修饰 the teacher，第二个 who 修饰 the student。层层还原后理解更清晰。" },
      { word: "The girl whose brother is a doctor who works in Beijing is my classmate.", meaning: "那个哥哥在北京当医生的女孩是我的同学。", breakdown: { root: "whose + who 嵌套" }, explanation: "结构拆解：The girl → (whose brother is a doctor) → (who works in Beijing)。第一个从句修饰 the girl，第二个从句修饰 a doctor。层层嵌套增加了阅读难度，理解时需分别还原。" },
      { word: "The book that you gave me which was written by him is very valuable.", meaning: "你给我的那本他写的书非常珍贵。", breakdown: { root: "that + which 嵌套" }, explanation: "结构：The book → (that you gave me) → (which was written by him)。that 修饰 the book，which 修饰同一先行词。注意 which 引导非限制性从句（用了逗号），此处 which 不能换 that。" }
    ],
    quiz: { question: "The boy ____ mother is a doctor ____ I like very much. 两个空分别应填：", options: ["who / that", "whose / who", "that / which", "whom / that"], correctAnswer: 1 }
  },
  {
    id: 20,
    root: "分隔定语从句",
    origin: "从句结构",
    meaning: "先行词与关系词之间被其他成分隔开，需准确识别",
    description: "分隔定语从句指先行词与关系词之间被主句中的其他成分（通常是动词短语或插入语）隔开。这种结构在高考阅读理解和完形填空中频繁出现，是造成理解障碍的重要原因。识别方法是：从关系词向前寻找能作其先行词的名词，同时确保该名词与从句中的某个成分有语义关系。",
    examples: [
      { word: "There is a boy waiting outside who wants to see you.", meaning: "外面有个想见你的男孩在等着。", breakdown: { root: "a boy 与 who 之间被 waiting outside 隔开" }, explanation: "结构还原：There is a boy (who wants to see you) waiting outside。正常语序：There is a boy who wants to see you, waiting outside。waiting outside 是分词短语分隔了先行词与关系词。" },
      { word: "The time came finally when we had to say goodbye.", meaning: "分别的时刻终于到来了。", breakdown: { root: "the time 与 when 被 came finally 隔开" }, explanation: "结构还原：The time (when we had to say goodbye) came finally。正常语序：The time came when we had to say goodbye。此处 came finally 是主句谓语，将先行词与关系词隔开。" },
      { word: "A lady was standing there who I thought was a teacher.", meaning: "有位女士站在那里，我认为她是老师。", breakdown: { root: "a lady 与 who 之间被 I thought 插入语隔开" }, explanation: "结构还原：A lady (who I thought was a teacher) was standing there。I thought 是插入语，隔开了先行词与关系词。关系词的实际位置紧跟 a lady。" }
    ],
    quiz: { question: "A letter came this morning ____ was from my mother. 空格处应填：", options: ["who", "which", "that", "whom"], correctAnswer: 1 }
  },
  {
    id: 21,
    root: "关系词省略规律",
    origin: "从句结构",
    meaning: "限制性定语从句中，作宾语的关系词可省略",
    description: "限制性定语从句中，关系词作宾语时可以省略；作主语时不能省略。作宾语时若介词不在关系词前（保留在动词后），则关系词可省；若介词提前到关系词前，则关系词不可省。高考完形填空和语法填空题常考关系词省略判断，需仔细分析从句结构。",
    examples: [
      { word: "The songs (which/that) she sang were beautiful.", meaning: "她唱的那些歌很美。", breakdown: { root: "which/that 作 sang 的宾语，可省略" }, explanation: "sang 是及物动词，which/that 是 sang 的宾语。限制性从句中宾语关系词可省略。若还原：The songs which/that she sang were beautiful，省略后句意不变但更简洁。" },
      { word: "The room in which we studied was dark.", meaning: "我们学习的那个房间很暗。", breakdown: { root: "in which 不可省略，which 是介词宾语" }, explanation: "介词 in 提前到 which 前，此时 which 不可省略。若改为 we studied in which，which 可省（we studied in the room），但语义上保留 in which 更正式。" },
      { word: "The people (whom/who/that) I trust most are my parents.", meaning: "我最信任的人是我的父母。", breakdown: { root: "关系词作 trust 的宾语，可省略" }, explanation: "I trust most = I trust whom/who/that most。三种关系词均可作宾语，且均可省略。高考中此类题需识别从句谓语是否及物。" }
    ],
    quiz: { question: "以下哪种情况下关系代词可以省略？", options: ["The girl who lives next door is kind.", "The book which was on the desk is mine.", "The man whom I invited came yesterday.", "The student whose name is Tom passed."], correctAnswer: 2 }
  },
  {
    id: 22,
    root: "as 与 which 引导非限制性从句",
    origin: "从句类型",
    meaning: "as 和 which 均可引导非限制性定语从句，但位置和用法有差异",
    description: "as 和 which 均可引导非限制性定语从句指代整个主句，但有明显区别：as 可位于句首、句中或句末；which 只能位于句末或句中，不能位于句首。高考常考两者互换和位置选择，写作中 as is known to all / as we all know 是常用开头句型。",
    examples: [
      { word: "As is known to all, China is a developing country.", meaning: "众所周知，中国是一个发展中国家。", breakdown: { root: "as 位于句首，不能换成 which" }, explanation: "as is known to all = 众所周知。as 指代后面整个句子。as 位于句首是固定用法，不能换成 which。高考写作中可使用 as is known to all 引出背景。" },
      { word: "He was late again, which made the teacher angry.", meaning: "他又迟到了，这让老师很生气。", breakdown: { root: "which 位于句末，指代整件事" }, explanation: "which 指代 He was late again 整件事，在从句中作 made 的主语。which 位于句末，不能换成 as（因为 as 位于句首或句中更自然）。" },
      { word: "He is a foreigner, as is evident from his accent.", meaning: "他是外国人，从他的口音就能明显听出来。", breakdown: { root: "as 位于句中或句末，可换成 which" }, explanation: "as is evident from his accent = 从他的口音能明显看出。as 指代 He is a foreigner。此处 as 和 which 均可用，书面语中 as 更正式。" }
    ],
    quiz: { question: "____ is often the case, he arrived late. 空格处应填：", options: ["Which", "As", "That", "Who"], correctAnswer: 1 }
  },
  {
    id: 23,
    root: "what 不引导定语从句",
    origin: "常见错误辨析",
    meaning: "what 只能引导名词性从句，不能引导定语从句",
    description: "what 只能引导名词性从句（主语从句、宾语从句、表语从句），不能引导定语从句。高考中常考名词加 what 的错误辨析，正确形式应为名词加 that/which 或先行词加关系词结构。考生需明确区分 what 引导名词性从句的功能与关系词引导定语从句的功能。",
    examples: [
      { word: "误：He told me something what I wanted to know.", meaning: "错误表达", breakdown: { root: "what 不能引导定语从句" }, explanation: "what 引导的是名词性从句（what I wanted to know = 我想知道的东西），但它不能直接修饰 something。正确形式：He told me something (that/which) I wanted to know. 或者 He told me what I wanted to know.（what 引导宾语从句，此时不用先行词）。" },
      { word: "正：Everything that he said is true.", meaning: "正确表达：他说的每句话都是真的。", breakdown: { root: "用 that 引导 everything 的定语从句" }, explanation: "everything 是不定代词，后接 that 引导的定语从句。注意：what 引导名词性从句时（如 I know what he wants），what 本身既是疑问词又是从句成分，不存在先行词。" },
      { word: "误：The reason what he gave was reasonable. 正：The reason he gave was reasonable.", meaning: "错误 / 正确（关系词省略）", breakdown: { root: "reason 后不用 what，定语从句用 why 或省略" }, explanation: "reason 后不能接 what（what 不引导定语从句）。正确形式：The reason (that/which) he gave was reasonable.（that/which 作 gave 的宾语可省）或 The reason why he gave was reasonable.（why 作原因状语）。" }
    ],
    quiz: { question: "以下哪个句子是正确的？", options: ["I believe everything what he said.", "I believe everything that he said.", "I believe what everything he said.", "I believe everything which he said."], correctAnswer: 1 }
  },
  {
    id: 24,
    root: "先行词确定与关系词选择",
    origin: "解题策略",
    meaning: "准确找到先行词是解题第一步，决定了关系词的选择",
    description: "准确确定先行词是解答定语从句题目的第一步。解题步骤：1）找到从句并判断修饰谁；2）确定先行词是人是物还是时间/地点/原因；3）根据关系词功能选择正确的词。常见陷阱：定语从句与同位语从句混淆、主句结构复杂时先行词被掩盖。高考真题中，先行词的确定往往是解题的关键突破点。",
    examples: [
      { word: "The book on the desk, ____ cover is blue, is mine.", meaning: "桌上那本蓝色封面的书是我的。", breakdown: { root: "先行词 = the book，whose cover = 书的封面" }, explanation: "先行词是 the book，从句修饰 the book。whose 在此作 cover 的定语（= the cover of which）。不要误选 which（which 作主语或宾语，不作定语）。" },
      { word: "I'll never forget the days ____ we spent together in the countryside.", meaning: "我永远不会忘记我们在乡下一起度过的那些日子。", breakdown: { root: "先行词 = the days，关系词作 spent 的宾语" }, explanation: "先行词是 the days（时间名词），从句修饰 the days。spent 是及物动词，关系词在从句中作 spent 的宾语。此处 which 不能用 when（when 作时间状语，而 spent 需要宾语）。" },
      { word: "The reason ____ he explained was not convincing.", meaning: "他解释的原因没有说服力。", breakdown: { root: "先行词 = the reason，关系词作 explained 的宾语" }, explanation: "先行词是 the reason（原因名词），从句修饰 the reason。explained 是及物动词，关系词作 explained 的宾语。此处关系词可省（that/which/省略），但不能用 why（why 是副词不作宾语）。" }
    ],
    quiz: { question: "先行词是 the place 且关系词在从句中作地点状语，应选：", options: ["where / in which", "which / that", "when / at which", "why / for which"], correctAnswer: 0 }
  },
  {
    id: 25,
    root: "高考定语从句综合解题策略",
    origin: "解题策略",
    meaning: "系统梳理高考定语从句各类题型的通用解题步骤",
    description: "综合运用以上所有知识点，形成系统解题策略：Step 1 找从句（识别由关系词引导的定语从句）；Step 2 定先行词（找到从句修饰的核心名词）；Step 3 判成分（关系词在从句中作什么成分）；Step 4 选关系词（根据人/物/状语/成分决定）；Step 5 查限制（非限制性等于不能用that；不定代词/最高级等等于必须用that）。遵循此流程可应对所有高考定语从句题型。",
    examples: [
      { word: "真题示例：The students ____ got full marks in the exam are from Class One.", meaning: "在考试中得满分的学生们来自一班。", breakdown: { root: "Step: 从句→先行词 the students→主语→指人→who" }, explanation: "分析流程：①从句 got full marks in the exam 是修饰性从句；②先行词是 the students（指人）；③从句中 got 的主语位置空缺；④关系词在从句中作主语，指人 → who。完整句：The students who got full marks in the exam are from Class One." },
      { word: "真题示例：The film, ____ we saw yesterday, was directed by Zhang Yimou.", meaning: "我们昨天看的那部电影是张艺谋导演的。", breakdown: { root: "Step: 非限制性→which→不能用 that" }, explanation: "分析流程：①逗号隔开等于非限制性定语从句；②只能用 which/whom/as；③先行词是 the film（指物）；④关系词在从句中作 saw 的宾语（we saw the film）→ which。不能用 that（非限制性从句禁止使用）。" },
      { word: "真题示例：This is the best hotel ____ I have ever stayed in.", meaning: "这是我去过的最好的酒店。", breakdown: { root: "Step: 最高级→只能用 that→介词 in 后" }, explanation: "分析流程：①最高级 the best 修饰先行词 hotel；②最高级前只能接 that；③关系词在从句中作 stayed in 的宾语（stay in the hotel）→ that。完整句：This is the best hotel that I have ever stayed in. 注意：介词 in 可保留在 that 后，此时 that 不可省。" }
    ],
    quiz: { question: "This is the very girl ____ I have been looking for. 空格处应填：", options: ["which", "that", "who", "whom"], correctAnswer: 1 }
  }
];
