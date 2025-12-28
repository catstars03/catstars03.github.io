// js/combinedData.js
const data = {
    // 中文版本
    zh: {
        // 博客数据
        blogs: [
            {
                id: 1,
                title: "杨振宁主要工作选读————序言",
                subtitle: "",
                category: ["杨振宁选读", "物理"],
                date: "2025-10-27",
                file: "序言.html",
                content: "悲痛于杨的离世，惊叹于杨的成就。开启一个不定期讨论班，试图从这些工作中窥探其研究特点与思想。本次选读为不定期讨论班，由于学业压力，进度较慢。"
            },
            {
                id: 2,
                title: "李代数讨论班讲义2————李代数的流形空间与指数映射",
                subtitle: "",
                category: ["数学"],
                date: "2025-4-10",
                file: "李代数2.html",
                content: "从李群到李代数。李群具有流形与群的双重性质，李代数也可以对应于李群流形上的李导数，以及零点切平面上的切矢。而其中的映射即为指数映射。"
            },
            {
                id: 3,
                title: "新知万花筒——相变理论",
                subtitle: "相变讲义",
                category: ["物理"],
                date: "2025-5-5",
                file: "相变.html",
                content: "相变理论由来已久，从范德瓦尔斯到李、杨，人们对相变的认识从温度曲线，对称性再到逸度零点。本文为自然哲学社的第一次新知万花筒活动，由此制作的科普视频为<a href='https://www.bilibili.com/video/BV1duh2zDEJz/' target='_blank'>《相变演义第一回——Landau创序破对称，Lee,Yang延度觅奇点》</a>"
            },
            {
                id: 4,
                title: "杨振宁主要工作选读A1：李杨相变理论",
                subtitle: "",
                category: ["杨振宁选读", "物理"],
                date: "2025-11-19",
                file: "A1李杨相变定理.html",
                content: "杨振宁选读第一次，主要介绍李、杨相变理论的基本原理和研究方法，以及一些趣闻（或许后者更有听众？）"
            },
            {
                id: 5,
                title: "场论中的手征对称性破缺",
                subtitle: "",
                category: ["物理"],
                date: "2025-8-20",
                file: "场论中的手征对称性破缺.html",
                content: "探讨场论中手征对称性破缺的现象和机制，本文为2025IOP的presentation。"
            },
            {
                id: 6,
                title: "纤维丛在规范场的应用",
                subtitle: "",
                category: ["物理", "数学"],
                date: "2025-6-23",
                file: "The usage of Fiber bundles in gauge field thery.pdf",
                content: "研究纤维丛在规范场论中的应用，本文为数学系25东京访学活动的选拔报告（伪装失败）"
            }
        ],
        // 笔记数据
        notes: [
            {
                id: 1,
                title: "量子场论",
                subtitle: "参考书目：《简明量子场论》王正行，《Quantum Field Theory》Weinberg",
                content: "将经典场进行量子化，并利用路径积分方法进行计算，从场量子化开始，主要通过微扰的方式计算路径积分下的散射问题",
                category: ["物理"],
                date: "2025-7-1",
                site: "床垫物理学",
                outline: [
                    { title: "第一、二章 前置知识与标量场", 
                        comment: "入门级场，量子场论必吃榜。如何将狭义相对论与量子力学联系起来？最直接的想法就是正则量子化。当然，在不清楚某粒子的特征时，很多人一律按标量场处理。\n\"在开始正式学习之前，都要学会用牛刀杀一只鸡。\"",
                        file: "note/QFT/第一、二章 前置知识与标量场.pdf" },
                    { title: "第三章 矢量场",
                        comment: "U（1）规范场，大部分与标量场类似。\n\"规范带来计算的效率，却是自由度的牺牲。有其他方法无？试看Faddev&Popov。\"", 
                        file: "note/QFT/第三章 矢量场.pdf" },
                    { title: "第四章 旋量场",
                        comment: "旋量场与量子化。\n\"（狄拉克的文章）没有一点渣滓，你跟着他走总觉得妙不可言，而且最后得出的是没有人能预先想到的东西。\"————杨振宁", 
                        file: "note/QFT/第四章 旋量场.pdf" },
                    { title: "第五章 路径积分", 
                        comment: "路径积分，传播子。\n\"概率版参见随机过程喵。\"", 
                        file: "note/QFT/第五章 路径积分.pdf" },
                    { title: "第六章 相互作用", 
                        comment: "相互作用传播子。本章起开始学习如何从传播子提取出有效信息，这是一套复杂与优雅并存的方法论。\n\"为什么我们要假设它是微扰的呢？\"\"我的铅笔只有一根。\" ", 
                        file: "note/QFT/第六章 相互作用.pdf" },
                    { title: "第七章 QED", 
                        comment: "电磁场下的量子场论\n\"本章除大量计算外无额外计算。\"",
                        file: "note/QFT/第七章 QED.pdf" },
                    { title: "第八章 重整化", 
                        comment: "重正化，QED重正化，Wald恒等式，可重整性理论。重正化理论是一种不刮骨的疗伤法，也涉及到完全图的格林函数，计算量冠绝本书。\n\"发散没有被真正解决，只是被我们藏到了地毯下面，万幸他起作用了。\"", 
                        file: "note/QFT/第八章 重正化.pdf" },
                    { title: "第九章 QCD",
                        comment: "规范场约束与路径积分，BRST对称，重正化与重整化群。\n\"强子观无外色，手征本不耦流。百般武艺齐下，方知合作难求。\"",
                        file: "note/QFT/第九章 QCD.pdf" },
                    { title: "第十章 GWS模型", 
                        comment: "从弱相互作用到标准粒子模型，本章更像是一次研究，从一个问题到下一个问题。\n\"至此，标准粒子模型已经构建。\"",
                        file: "note/QFT/第十章 GWS模型.pdf" }
                ]
            },
            {
                id: 2,
                title: "微分几何基础",
                subtitle: "参考书目：《微分几何基础与广义相对论（上）》梁灿彬",
                content: "本内容来自梁灿彬《微分几何基础与广义相对论》的前五章，包含张量，导数与曲率，基灵场，标架等内容。作为广义相对论的基础，严谨性不能取代数学专业书籍",
                category: ["数学"],
                date: "2024-8-20",
                site: "？",
                outline: [
                    { title: "第一章 拓扑空间", comment: "拓扑学相关基础。我们如何去定位每一个点，如何描述点上的连续性？\n\"拓扑的大手伸到哪里，哪里的几何就要变成开集\"", file: "note/DG/第一章 拓扑空间.pdf" },
                    { title: "第二章 流形与张量场", comment: "微分流形的定义，图册与矢量张量。连续性之后，我们将要用已经熟悉的线性空间去描述曲面上的方向，此时局部平滑是必要的。\n\"我有无数张地图，每一张描绘了一处风景，拼凑起来是一个大千世界。\" ", file: "note/DG/第二章 流形与张量场.pdf" },
                    { title: "第三章 黎曼曲率张量", comment: "导数算符，联络，度规，曲率。有了局域线性空间，接下来将所有局部空间粘合在一起。\n\"由于内容繁多，笔者准备了一图流\"", file: "note/DG/第三章 黎曼曲率张量.pdf" },
                    { title: "第四章 李导数与Killing场", comment: "李导数，Killing场，超曲面\"撒谎导数与杀戮领域\"", file: "note/DG/第四章 李导数与Killing场.pdf" },
                    { title: "第五章 微分形式（完结）", comment: "微分形式，积分，体元与标架。我们只研究自己感兴趣的那部分，其他的作为标架不动。\n\"古今几何事，欧高黎嘉陈\"", file: "note/DG/第五章 微分形式.pdf" }
                ]
            },
            {
                id: 3,
                title: "广相I——爱因斯坦场方程",
                subtitle: "参考书目：《微分几何基础与广义相对论（上）》梁灿彬",
                content: "本内容包括相对论力学，爱因斯坦场方程与施瓦西空间等内容，为较为基础的广义相对论内容。",
                category: ["物理"],
                date: "2024-12-15",
                site: "？",
                outline: [
                    { title: "一：狭义相对论", comment: "狭义相对论的几何描述，当描述变化的时间成为一个坐标，我们如何描述自己的运动？", file: "note/GR1/一：狭义相对论.pdf" },
                    { title: "二：爱因斯坦场方程", comment: "注意看，这个人叫爱因，他是如何猜出场方程的形式的？", file: "note/GR1/二：爱因斯坦场方程.pdf" },
                    { title: "三：场方程的简单解", comment: "场方程的简单解，如施瓦西解，引力波。", file: "note/GR1/三：场方程的简单解.pdf" },
                    { title: "四：几种对称性的场方程解", comment: "几种对称性的场方程解，有待补充。", file: "note/GR1/四：几种对称性的场方程解.pdf" }
                ]
            },
            {
                id: 4,
                title: "线性代数",
                subtitle: "参考书目：《Linear Algebra Done Right》Axler",
                content: "线性代数的基本概念和应用，包括向量空间、线性映射、特征值和特征向量等内容。",
                category: ["数学"],
                date: "2024-11-15",
                site: "？",
                outline: [
                    { title: "线性代数全", comment: "数学物理的基础————线性代数", file: "note/LADR/线代笔记.pdf" }
                ]
            },
            {
                id: 5,
                title: "统计力学",
                subtitle: "参考书目：《热力学与统计力学》汪志诚，《统计物理》李政道，《量子统计物理》",
                content: "统计力学的基本概念和应用，包括玻尔兹曼分布、全同粒子的分布等内容。",
                category: ["物理"],
                date: "2025-9-10",
                site: "？",
                outline: [
                    { title: "一，二：前置知识，玻尔兹曼分布", 
                        comment: "统计物理的开始。如果不考虑量子效应，我们用摸球入袋的方法建模粒子分布。对简单相互作用有很好的描述。\n\" 统计物理的精髓，就是告诉我们，在非常多的信息量中，哪些是有用的。\"", 
                        file: "note/SM/一，二：前置知识，玻尔兹曼分布.pdf" },
                    { title: "三、四：全同粒子的分布", 
                        comment: "玻色分布与费米分布，全同带来的简并与非简并改变了粒子的分配方式，导致了不同的物理现象。\n\"Not trees, not woods, thus we call it forest.\"", 
                        file: "note/SM/三、四：全同粒子的分布.pdf" },
                    { title: "五：系综理论", 
                        comment: "随机过程的遍历定理告诉我们系综平均等于时间平均，对于平衡态来说，时间平均近似于统计评均（或概率平均），这给了我们一个研究的思路。\n\"如果愿意，你可以用系综计算自由市场的资产分布。\"", 
                        file: "note/SM/五：系综理论.pdf" }, 
                    { title: "六：趋向平衡的过程", 
                        comment: "统计力学的数学基础，庞加莱回归，马氏链与玻尔兹曼H定理。\n\"随机过程真好用喵。\"", 
                        file: "note/SM/六：趋向平衡的过程.pdf" },
                    { title: "七：相变与合作行为", 
                        comment: "主要内容为李杨相变，对于有限个粒子，迈耶展开与位力展开可以帮助我们计算其微扰，然而，相变是一个剧烈的过程，这使得前者失效。此外，李政道和杨振宁也证明：有限大小下的系综不会发生数学上的相变。当我们近似到无穷大，相变成为数学上可辨认的奇点。\n\"\"李杨相变”的国外翻译是\"Yang-Lee Transition\"，中文叫李杨的原因可能是李政道写了一本《统计力学》的中文教材\"", 
                        file: "note/SM/七：相变与合作行为.pdf" },
                    { title: "八：量子化下的系综理论与力学量", 
                        comment: "当我们要研究量子态下的系统（低温时量子效应不可忽略），我们需要用到算符的语言去表示之前的量，这样的表述非常简洁。\n\"可以将量子系统看作马氏链，得到不少有意思的结论。具体内容我会写成blog。\"", 
                        file: "note/SM/八：量子化下的系综理论与力学量.pdf" },
                    { title: "九：有限温场论", 
                        comment: "松原观察到了温度量β的虚时间性质，用量子场论的方法发展了有限温度下的量子场论，是计算量子相变的好帮手。 \n\"从\"终末\"而来，向现在而去。\"", 
                        file: "note/SM/九：有限温场论.pdf" }
                ]
            }
        ]
    },
    // 英文版本
    en: {
        // 博客数据
        blogs: [
            {
                id: 1,
                title: "Preface",
                subtitle: "",
                category: ["Overview"],
                date: "2025-11-4",
                file: "序言.html",
                content: "xxxuyyyy"
            },
            {
                id: 2,
                title: "Lie Algebra 2",
                subtitle: "",
                category: ["Mathematics"],
                date: "2025-4-10",
                file: "李代数2.html",
                content: "Detailed introduction to the basic concepts and applications of Lie algebra"
            },
            {
                id: 3,
                title: "Phase Transition",
                subtitle: "Phase Transition Lecture Notes",
                category: ["Physics"],
                date: "2025-5-5",
                file: "相变.html",
                content: "Explaining the basic principles and research methods of phase transition theory. The popular science video for this topic is:【<a href='https://www.bilibili.com/video/BV1duh2zDEJz/?share_source=copy_web&vd_source=32356ab7a19b3e98485e1dfa73ec2be4' target='_blank'>Phase Transition Romance - Chapter One: Landau Creates Order and Breaks Symmetry, Lee and Yang Extend the Path and Find Singular Points</a>】"
            },
            {
                id: 4,
                title: "A1. Lee-Yang Phase Transition Theory",
                subtitle: "",
                category: ["Physics"],
                date: "2025-11-20",
                file: "A1李杨相变定理.html",
                content: "In-depth analysis of the mathematical derivation and physical significance of Lee-Yang phase transition theory"
            },
            {
                id: 5,
                title: "Chiral Symmetry Breaking in Field Theory",
                subtitle: "",
                category: ["Physics"],
                date: "2025-8-20",
                file: "场论中的⼿征对称性破缺.html",
                content: "Exploring the phenomena and mechanisms of chiral symmetry breaking in field theory"
            },
            {
                id: 6,
                title: "The usage of Fiber bundles in gauge field thery",
                subtitle: "",
                category: ["Physics"],
                date: "2025-6-20",
                file: "The usage of Fiber bundles in gauge field thery.pdf",
                content: "Research on the application of fiber bundles in gauge field theory"
            }
        ],
        // 笔记数据
        notes: [
            {
                id: 1,
                title: "Quantum Field Theory (QFT)",
                subtitle: "Reference book: \"Concise Quantum Field Theory\" by Wang Zhengxing",
                content: "Quantize classical fields and use path integral methods for calculations, starting from field quantization, mainly calculating scattering problems in path integrals through perturbation. Will supplement content from Weinberg's book later",
                category: ["Physics"],
                date: "2025-7-1",
                site: "Mattress Physics",
                outline: [
                    { title: "Chapters 1-2: Prerequisite Knowledge and Scalar Fields", comment: "Introductory level fields.\n\"We live on a mattress that we can jump on. Now, please quantize your footprints.\"", file: "note/QFT/第一、二章 前置知识与标量场.pdf" },
                    { title: "Chapter 3: Vector Fields", comment: "U(1) gauge fields, simple vector fields because we haven't learned non-Abelian fields yet.\n\"Gauge brings computational efficiency, but it is a sacrifice of degrees of freedom.\"", file: "note/QFT/第三章 矢量场.pdf" },
                    { title: "Chapter 4: Spinor Fields", comment: "Spinor fields and quantization.\n\"When Dirac wrote this equation, he decisively predicted the existence of positrons, and positrons decisively verified this theory.\"", file: "note/QFT/第四章 旋量场.pdf" },
                    { title: "Chapter 5: Path Integrals", comment: "Path integrals, propagators.\n\"Probability version see stochastic processes meow.\"", file: "note/QFT/第五章 路径积分.pdf" },
                    { title: "Chapter 6: Interactions", comment: "Interaction propagators, Feynman diagrams, scattering matrix and interfaces, π-N scattering.\n\"Why do we assume it's perturbative?\" \"My pencil can only assume it's perturbative.\"", file: "note/QFT/第六章 相互作用.pdf" },
                    { title: "Chapter 7: QED", comment: "Field theory applications of QED.\n\"The anomalous magnetic moment of electrons is the most precise theory that matches experiment in theoretical physics.\"", file: "note/QFT/第七章 QED.pdf" },
                    { title: "Chapter 8: Renormalization", comment: "Renormalization, QED renormalization, Wald identities, renormalizability theory.\n\"Divergence hasn't been truly solved, it's just been hidden under the carpet by us. Fortunately, it works.\"", file: "note/QFT/第八章 重正化.pdf" },
                    { title: "Chapter 9: QCD", comment: "Gauge field constraints and path integrals, BRST symmetry, renormalization and renormalization group.\n\"Gauge fields are applications of fiber bundles, so Yang later 'always spoke of geometry'.\"", file: "note/QFT/第九章 QCD.pdf" },
                    { title: "Chapter 10: GWS Model", comment: "Fermi weak interactions, Higgs mechanism, Weinberg rotation, standard particle model.\n\"At this point, the standard particle model has been constructed.\"", file: "note/QFT/第十章 GWS模型.pdf" }
                ]
            },
            {
                id: 2,
                title: "Basic Differential Geometry (DG)",
                subtitle: "Reference book: \"Basic Differential Geometry and General Relativity (Volume 1)\" by Liang Canbin",
                content: "This content comes from the first five chapters of Liang Canbin's \"Basic Differential Geometry and General Relativity\", including tensors, derivatives and curvature, Killing fields, frames, etc. As the basis of general relativity, rigor cannot replace mathematics professional books",
                category: ["Mathematics"],
                date: "2024-8-20",
                site: "Li Designer",
                outline: [
                    { title: "Chapter 1: Topological Spaces", comment: "Basic topology-related content.\n\"Wherever topology's big hand reaches, geometry there becomes open sets.\"", file: "note/DG/第一章 拓扑空间.pdf" },
                    { title: "Chapter 2: Manifolds and Tensor Fields", comment: "Definition of differentiable manifolds, atlases and vector tensors.\n\"I have countless maps, each depicting a scenery.\"", file: "note/DG/第二章 流形与张量场.pdf" },
                    { title: "Chapter 3: Riemannian Curvature Tensor", comment: "Derivative operators, connections, metrics, curvature.\n\"Due to the abundance of content, the author has prepared an infographic.\"", file: "note/DG/第三章 黎曼曲率张量.pdf" },
                    { title: "Chapter 4: Lie Derivatives and Killing Fields", comment: "Lie derivatives, Killing fields, hypersurfaces 'Lie derivatives and Killing fields'.\"", file: "note/DG/第四章 李导数与Killing场.pdf" },
                    { title: "Chapter 5: Differential Forms", comment: "Differential forms, integration, volume elements and frames.\n\"Ancient and modern geometric matters: Euclid, Gauss, Riemann, Cartan, Chern.\"", file: "note/DG/第五章 微分形式.pdf" }
                ]
            },
            {
                id: 3,
                title: "Simple General Relativity",
                subtitle: "Reference book: \"Basic Differential Geometry and General Relativity (Volume 1)\" by Liang Canbin",
                content: "This content includes relativistic mechanics, Einstein field equations, Schwarzschild space, etc., which are basic general relativity contents.",
                category: ["Physics"],
                date: "2024-10-20",
                site: "Li Designer",
                outline: [
                    { title: "1: Special Relativity", comment: "Applications of special relativity in mechanics", file: "note/GR1/一：狭义相对论.pdf" },
                    { title: "2: Einstein Field Equations", comment: "Equations describing how matter curves spacetime", file: "note/GR1/二：爱因斯坦场方程.pdf" },
                    { title: "3: Simple Solutions of Field Equations", comment: "Simple solutions of field equations", file: "note/GR1/三：场方程的简单解.pdf" },
                    { title: "4: Field Equation Solutions with Various Symmetries", comment: "Field equation solutions with various symmetries", file: "note/GR1/四：几种对称性的场方程解.pdf" }
                ]
            },
            {
                id: 4,
                title: "Linear Algebra (LADR)",
                subtitle: "Reference book: \"Linear Algebra Done Right\" by Axler",
                content: "Basic concepts and applications of linear algebra, including vector spaces, linear mappings, eigenvalues and eigenvectors, etc.",
                category: ["Mathematics"],
                date: "2024-11-15",
                site: "Li Designer",
                outline: [
                    { title: "Linear Algebra Notes", comment: "Basic concepts and applications of linear algebra", file: "note/LADR/线代笔记.pdf" }
                ]
            },
            {
                id: 5,
                title: "Statistical Mechanics (SM)",
                subtitle: "Reference book: \"Statistical Mechanics\" by Wang Zhicheng",
                content: "Basic concepts and applications of statistical mechanics, including Boltzmann distribution, identical particle distributions, etc.",
                category: ["Physics"],
                date: "2025-1-10",
                site: "Li Designer",
                outline: [
                    { title: "Chapters 1-2: Prerequisites, Boltzmann Distribution", comment: "Prerequisites for statistical mechanics and Boltzmann distribution", file: "note/SM/一，二：前置知识，玻尔兹曼分布.pdf" },
                    { title: "Chapters 3-4: Distributions of Identical Particles", comment: "Distribution statistics of identical particles", file: "note/SM/三、四：全同粒子的分布.pdf" },
                    { title: "Chapter 5: Ensemble Theory", comment: "Ensemble theory in statistical mechanics", file: "note/SM/五：系综理论.pdf" },
                    { title: "Chapter 6: Approach to Equilibrium", comment: "Processes approaching equilibrium", file: "note/SM/六：趋向平衡的过程.pdf" },
                    { title: "Chapter 7: Phase Transitions and Cooperative Behavior", comment: "Study of phase transitions and cooperative behavior", file: "note/SM/七：相变与合作行为.pdf" },
                    { title: "Chapter 8: Ensemble Theory and Mechanical Quantities under Quantization", comment: "Ensemble theory and mechanical quantities under quantization", file: "note/SM/八：量子化下的系综理论与力学量.pdf" },
                    { title: "Chapter 9: Finite Temperature Field Theory", comment: "Field theory applications at finite temperature", file: "note/SM/九：有限温场论.pdf" }
                ]
            }
        ]
    }
};

// 根据当前语言获取数据
function getData(language) {
    return data[language] || data.zh; // 默认返回中文数据
}

// 获取当前语言（从URL参数或浏览器设置）
function getCurrentLanguage() {
    // 检查URL参数
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('lang')) {
        const lang = urlParams.get('lang');
        if (data[lang]) {
            return lang;
        }
    }
    
    // 检查浏览器语言偏好
    const browserLang = navigator.language.split('-')[0];
    if (data[browserLang]) {
        return browserLang;
    }
    
    // 默认返回中文
    return 'zh';
}

// 设置当前语言
function setLanguage(lang) {
    if (!data[lang]) {
        return;
    }
    
    // 更新URL参数
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('lang', lang);
    window.history.replaceState({}, '', `${window.location.pathname}?${urlParams.toString()}`);
    
    // 刷新页面以应用新语言
    window.location.reload();
}