// 目录结构数据
const directoryStructure = {
    cs: {
        name: 'CS - 计算机科学',
        type: 'folder',
        children: {
            '1_数学与理论基础': {
                name: '数学与理论基础',
                type: 'folder',
                children: {
                    '线性代数.md': { name: '线性代数', type: 'file', path: 'cs/1_数学与理论基础/线性代数.md' },
                    '高等数学.md': { name: '高等数学', type: 'file', path: 'cs/1_数学与理论基础/高等数学.md' },
                    '离散数学.md': { name: '离散数学', type: 'file', path: 'cs/1_数学与理论基础/离散数学.md' },
                }
            },
            '2_计算机体系结构.md': { name: '计算机体系结构', type: 'file', path: 'cs/2_计算机体系结构.md' },
            '3_操作系统与编译原理.md': { name: '操作系统与编译原理', type: 'file', path: 'cs/3_操作系统与编译原理.md' },
            '4_计算机网络与信息安全.md': { name: '计算机网络与信息安全', type: 'file', path: 'cs/4_计算机网络与信息安全.md' },
            '5_编程语言与软件工程.md': { name: '编程语言与软件工程', type: 'file', path: 'cs/5_编程语言与软件工程.md' },
            '6_前端与可视化.md': { name: '前端与可视化', type: 'file', path: 'cs/6_前端与可视化.md' },
            '7_后端与系统开发.md': { name: '后端与系统开发', type: 'file', path: 'cs/7_后端与系统开发.md' },
            '8_数据库与大数据.md': { name: '数据库与大数据', type: 'file', path: 'cs/8_数据库与大数据.md' },
            '9_运维与云计算.md': { name: '运维与云计算', type: 'file', path: 'cs/9_运维与云计算.md' },
            '10_算法与人工智能.md': { name: '算法与人工智能', type: 'file', path: 'cs/10_算法与人工智能.md' },
            '11_计算机图形与视觉.md': { name: '计算机图形与视觉', type: 'file', path: 'cs/11_计算机图形与视觉.md' }
        }
    },
    '3s': {
        name: '3S - 空间信息科学',
        type: 'folder',
        children: {
            '1_空间信息科学基础.md': { name: '空间信息科学基础', type: 'file', path: '3s/1_空间信息科学基础.md' },
            '2_空间数据获取.md': { name: '空间数据获取', type: 'file', path: '3s/2_空间数据获取.md' },
            '3_空间数据管理.md': { name: '空间数据管理', type: 'file', path: '3s/3_空间数据管理.md' },
            '4_空间分析与建模.md': { name: '空间分析与建模', type: 'file', path: '3s/4_空间分析与建模.md' },
            '5_地图制图与可视化.md': { name: '地图制图与可视化', type: 'file', path: '3s/5_地图制图与可视化.md' },
            '6_WebGIS 与系统开发.md': { name: 'WebGIS 与系统开发', type: 'file', path: '3s/6_WebGIS 与系统开发.md' },
            '7_系统运维与部署.md': { name: '系统运维与部署', type: 'file', path: '3s/7_系统运维与部署.md' },
            '8_应用与综合案例.md': { name: '应用与综合案例', type: 'file', path: '3s/8_应用与综合案例.md' },
            '9_前沿与发展方向.md': { name: '前沿与发展方向', type: 'file', path: '3s/9_前沿与发展方向.md' }
        }
    },
    geo: {
        name: 'GEO - 地理与地质',
        type: 'folder',
        children: {
            '1_地球系统与自然地理.md': { name: '地球系统与自然地理', type: 'file', path: 'geo/1_地球系统与自然地理.md' },
            '2_人文地理与区域发展.md': { name: '人文地理与区域发展', type: 'file', path: 'geo/2_人文地理与区域发展.md' },
            '3_普通地质学与地质过程.md': { name: '普通地质学与地质过程', type: 'file', path: 'geo/3_普通地质学与地质过程.md' },
            '4_地球物理与地球化学.md': { name: '地球物理与地球化学', type: 'file', path: 'geo/4_地球物理与地球化学.md' },
            '5_资源勘查与工程地质.md': { name: '资源勘查与工程地质', type: 'file', path: 'geo/5_资源勘查与工程地质.md' },
            '6_水文地质与环境地质.md': { name: '水文地质与环境地质', type: 'file', path: 'geo/6_水文地质与环境地质.md' },
            '7_野外地质与区域案例.md': { name: '野外地质与区域案例', type: 'file', path: 'geo/7_野外地质与区域案例.md' }
        }
    },
    meta: {
        name: 'META - 元知识',
        type: 'folder',
        children: {
            '1_科研方法论.md': { name: '科研方法论', type: 'file', path: 'meta/1_科研方法论.md' },
            '2_知识管理与工具.md': { name: '知识管理与工具', type: 'file', path: 'meta/2_知识管理与工具.md' },
            '3_哲学 · 心理 · 思想.md': { name: '哲学 · 心理 · 思想', type: 'file', path: 'meta/3_哲学 · 心理 · 思想.md' },
            '4_职业规划与成长.md': { name: '职业规划与成长', type: 'file', path: 'meta/4_职业规划与成长.md' },
            '5_创作与表达.md': { name: '创作与表达', type: 'file', path: 'meta/5_创作与表达.md' }
        }
    }
};

// 当前展开状态
const expandedState = {};

// 所有文件列表（用于搜索）
let allFiles = [];

// 搜索结果
let searchResults = [];

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 构建所有文件列表
    buildFileList(directoryStructure);
    
    // 渲染目录树
    renderDirectoryTree();
    
    // 初始化搜索功能
    initSearch();
    
    // 初始化其他功能
    initOtherFeatures();
    
    // 监听 hash 变化
    window.addEventListener('hashchange', () => {
        if (window.location.hash) {
            const filePath = decodeURIComponent(window.location.hash.substring(1));
            loadFile(filePath);
        } else {
            // 如果没有 hash，显示欢迎页面
            document.getElementById('contentBody').innerHTML = `
                <div class="welcome-message">
                    <h1>欢迎使用电子笔记</h1>
                    <p>请从左侧目录选择要查看的笔记内容，或使用顶部搜索框搜索笔记。</p>
                </div>
            `;
            document.getElementById('contentTitle').textContent = '欢迎';
            setActiveLink(null);
        }
    });
    
    // 检查 URL hash 是否指定了文件
    if (window.location.hash) {
        const filePath = decodeURIComponent(window.location.hash.substring(1));
        loadFile(filePath);
    }
});

// 构建所有文件列表
function buildFileList(structure, prefix = '') {
    Object.keys(structure).forEach(key => {
        const item = structure[key];
        if (item.type === 'file') {
            allFiles.push({
                name: item.name,
                path: item.path,
                fullPath: prefix + item.name,
                category: prefix || '其他'
            });
        } else if (item.type === 'folder' && item.children) {
            buildFileList(item.children, prefix + item.name + ' / ');
        }
    });
}

// 初始化搜索功能
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');
    let searchTimeout;
    
    // 搜索输入
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim();
        
        if (query.length === 0) {
            hideSearchResults();
            return;
        }
        
        searchTimeout = setTimeout(() => {
            performSearch(query);
        }, 300);
    });
    
    // 搜索按钮点击
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            performSearch(query);
        }
    });
    
    // 回车搜索
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                performSearch(query);
            }
        } else if (e.key === 'Escape') {
            hideSearchResults();
            searchInput.blur();
        }
    });
    
    // 点击外部关闭搜索结果
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target) && !searchButton.contains(e.target)) {
            hideSearchResults();
        }
    });
}

// 执行搜索
async function performSearch(query) {
    const searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.innerHTML = '<div class="loading">搜索中...</div>';
    searchResultsDiv.classList.add('active');
    
    const results = [];
    const lowerQuery = query.toLowerCase();
    
    // 搜索文件名和路径
    for (const file of allFiles) {
        const nameMatch = file.name.toLowerCase().includes(lowerQuery);
        const pathMatch = file.path.toLowerCase().includes(lowerQuery);
        const categoryMatch = file.category.toLowerCase().includes(lowerQuery);
        
        if (nameMatch || pathMatch || categoryMatch) {
            let score = 0;
            if (file.name.toLowerCase() === lowerQuery) score = 100;
            else if (file.name.toLowerCase().startsWith(lowerQuery)) score = 80;
            else if (nameMatch) score = 60;
            else if (pathMatch) score = 40;
            else if (categoryMatch) score = 20;
            
            results.push({
                ...file,
                score,
                matchType: nameMatch ? 'name' : pathMatch ? 'path' : 'category'
            });
        }
    }
    
    // 按分数排序
    results.sort((a, b) => b.score - a.score);
    
    // 限制结果数量
    const limitedResults = results.slice(0, 10);
    
    // 显示结果
    if (limitedResults.length === 0) {
        searchResultsDiv.innerHTML = '<div class="search-no-results">未找到匹配的笔记</div>';
    } else {
        searchResultsDiv.innerHTML = limitedResults.map((result, index) => {
            const highlightedName = highlightText(result.name, query);
            const highlightedPath = highlightText(result.path, query);
            return `
                <div class="search-result-item" data-path="${result.path}" data-index="${index}">
                    <div class="search-result-title">${highlightedName}</div>
                    <div class="search-result-path">${highlightedPath}</div>
                </div>
            `;
        }).join('');
        
        // 添加点击事件
        searchResultsDiv.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                const filePath = item.getAttribute('data-path');
                hideSearchResults();
                document.getElementById('searchInput').value = '';
                loadFile(filePath);
            });
            
            item.addEventListener('mouseenter', () => {
                item.classList.add('active');
            });
            
            item.addEventListener('mouseleave', () => {
                item.classList.remove('active');
            });
        });
    }
    
    searchResults = limitedResults;
}

// 高亮文本
function highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return text.replace(regex, '<span class="search-result-highlight">$1</span>');
}

// 转义正则表达式特殊字符
function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 隐藏搜索结果
function hideSearchResults() {
    const searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.classList.remove('active');
}

// 初始化其他功能
function initOtherFeatures() {
    // 切换侧边栏
    const toggleSidebarBtn = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');
    
    toggleSidebarBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });
    
    // 折叠全部
    const collapseAllBtn = document.getElementById('collapseAllBtn');
    collapseAllBtn.addEventListener('click', () => {
        collapseAll();
    });
    
    // 回到顶部
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const contentBody = document.getElementById('contentBody');
    
    contentBody.addEventListener('scroll', () => {
        if (contentBody.scrollTop > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        contentBody.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 折叠所有目录
function collapseAll() {
    Object.keys(expandedState).forEach(key => {
        expandedState[key] = false;
    });
    
    document.querySelectorAll('.nav-children').forEach(ul => {
        ul.classList.remove('expanded');
    });
    
    document.querySelectorAll('.nav-toggle').forEach(toggle => {
        toggle.classList.remove('expanded');
    });
}

// 渲染目录树
function renderDirectoryTree() {
    const sidebarNav = document.getElementById('sidebarNav');
    sidebarNav.innerHTML = '';
    
    const ul = document.createElement('ul');
    ul.className = 'nav-list';
    
    // 遍历一级目录，添加序号
    const topLevelKeys = Object.keys(directoryStructure);
    topLevelKeys.forEach((key, index) => {
        const item = directoryStructure[key];
        const li = createDirectoryItem(key, item, 0, index + 1);
        ul.appendChild(li);
    });
    
    sidebarNav.appendChild(ul);
}

// 从key中提取序号
function extractNumber(key) {
    const match = key.match(/^(\d+)[_\.]/);
    return match ? parseInt(match[1]) : null;
}

// 创建目录项
function createDirectoryItem(key, item, level, index = null, parentPath = '') {
    const li = document.createElement('li');
    li.className = 'nav-item';
    li.setAttribute('data-key', key);
    li.setAttribute('data-level', level);
    
    // 确定序号
    let number = index;
    if (number === null && level > 0) {
        number = extractNumber(key);
        // 如果从key中提取不到序号，在子目录处理时会用索引
    }
    
    // 格式化显示名称：添加序号前缀
    let displayName = item.name;
    let currentPath = parentPath;
    
    if (number !== null) {
        if (level === 0) {
            // 一级目录：1. CS - 计算机科学
            displayName = `${number}. ${item.name}`;
            currentPath = `${number}`;
        } else if (level === 1) {
            // 二级目录：1.1 数学与理论基础
            displayName = `${parentPath}.${number} ${item.name}`;
            currentPath = `${parentPath}.${number}`;
        } else if (level === 2) {
            // 三级目录：1.1.1 线性代数
            displayName = `${parentPath}.${number} ${item.name}`;
            currentPath = `${parentPath}.${number}`;
        }
    } else if (level === 0) {
        // 一级目录如果没有序号，使用索引
        currentPath = '';
    }
    
    if (item.type === 'file') {
        // 文件项
        const link = document.createElement('a');
        link.className = 'nav-link file-link';
        link.href = `#${encodeURIComponent(item.path)}`;
        link.textContent = displayName;
        link.setAttribute('data-path', item.path);
        link.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            await loadFile(item.path);
            setActiveLink(link);
        });
        li.appendChild(link);
    } else if (item.type === 'folder') {
        // 文件夹项
        const link = document.createElement('button');
        link.className = 'nav-link has-children';
        link.textContent = displayName;
        link.setAttribute('data-folder-key', key);
        
        const toggle = document.createElement('span');
        toggle.className = 'nav-toggle';
        const stateKey = `${level}_${key}_${item.name}`;
        if (expandedState[stateKey]) {
            toggle.classList.add('expanded');
        }
        
        link.insertBefore(toggle, link.firstChild);
        
        link.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFolder(li, stateKey, toggle);
        });
        
        li.appendChild(link);
        
        // 创建子目录
        if (item.children) {
            const childrenUl = document.createElement('ul');
            childrenUl.className = 'nav-children';
            if (expandedState[stateKey]) {
                childrenUl.classList.add('expanded');
            }
            
            // 对子项排序并添加序号
            const childKeys = Object.keys(item.children);
            // 按序号排序（如果有）
            childKeys.sort((a, b) => {
                const numA = extractNumber(a);
                const numB = extractNumber(b);
                if (numA !== null && numB !== null) {
                    return numA - numB;
                } else if (numA !== null) {
                    return -1;
                } else if (numB !== null) {
                    return 1;
                } else {
                    return a.localeCompare(b);
                }
            });
            
            childKeys.forEach((childKey, childIndex) => {
                const childItem = item.children[childKey];
                // 子级序号从key中提取，如果没有则使用索引+1
                const childNumber = extractNumber(childKey);
                // 如果没有从key中提取到序号，使用索引+1
                const finalNumber = childNumber !== null ? childNumber : (childIndex + 1);
                const childLi = createDirectoryItem(childKey, childItem, level + 1, finalNumber, currentPath);
                childrenUl.appendChild(childLi);
            });
            
            li.appendChild(childrenUl);
        }
    }
    
    return li;
}

// 切换文件夹展开/折叠
function toggleFolder(li, stateKey, toggleElement) {
    const childrenUl = li.querySelector('.nav-children');
    
    if (childrenUl && toggleElement) {
        const isExpanded = childrenUl.classList.contains('expanded');
        if (isExpanded) {
            childrenUl.classList.remove('expanded');
            toggleElement.classList.remove('expanded');
            expandedState[stateKey] = false;
        } else {
            childrenUl.classList.add('expanded');
            toggleElement.classList.add('expanded');
            expandedState[stateKey] = true;
        }
    }
}

// 展开父目录
function expandParentFolders(link) {
    let currentItem = link.closest('.nav-item');
    while (currentItem) {
        const parentUl = currentItem.parentElement;
        if (parentUl && parentUl.classList.contains('nav-children')) {
            // 展开这个目录
            parentUl.classList.add('expanded');
            // 找到父目录的按钮
            const parentLi = parentUl.closest('.nav-item');
            if (parentLi) {
                const parentButton = parentLi.querySelector('button.nav-link');
                const toggle = parentLi.querySelector('.nav-toggle');
                if (toggle && parentButton) {
                    toggle.classList.add('expanded');
                    // 更新状态（使用按钮的 data-folder-key 或文本内容）
                    const folderKey = parentButton.getAttribute('data-folder-key') || parentButton.textContent;
                    const level = parseInt(parentLi.getAttribute('data-level') || '0');
                    const stateKey = `${level}_${folderKey}_${parentButton.textContent}`;
                    expandedState[stateKey] = true;
                }
            }
            currentItem = parentLi;
        } else {
            break;
        }
    }
}

// 设置活动链接
function setActiveLink(activeLink) {
    // 移除所有活动状态
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    // 添加活动状态
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// 生成标题ID
function generateHeadingId(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\u4e00-\u9fa5]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

// 提取标题并生成目录导航
function generateTOC() {
    const tocNav = document.getElementById('tocNav');
    const tocSidebar = document.getElementById('tocSidebar');
    const markdownBody = document.querySelector('.markdown-body');
    
    if (!markdownBody) {
        tocSidebar.classList.remove('visible');
        return;
    }
    
    // 从实际渲染的DOM中获取标题
    const headings = markdownBody.querySelectorAll('h1, h2, h3');
    
    if (headings.length === 0) {
        tocSidebar.classList.remove('visible');
        return;
    }
    
    tocSidebar.classList.add('visible');
    tocNav.innerHTML = '<div class="toc-nav-title">目录</div><ul class="toc-list"></ul>';
    const tocList = tocNav.querySelector('.toc-list');
    
    headings.forEach((heading, index) => {
        const level = parseInt(heading.tagName.substring(1));
        if (level > 3) return; // 只显示 h1-h3
        
        // 如果没有ID，生成一个
        if (!heading.id) {
            const text = heading.textContent.trim();
            heading.id = generateHeadingId(text) || `heading-${index}`;
        }
        
        const id = heading.id;
        
        const li = document.createElement('li');
        li.className = `toc-item toc-level-${level}`;
        
        const a = document.createElement('a');
        a.href = `#${id}`;
        a.className = 'toc-link';
        a.textContent = heading.textContent.trim();
        a.setAttribute('data-heading-id', id);
        
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const targetHeading = markdownBody.querySelector(`#${id}`);
            if (targetHeading) {
                targetHeading.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // 更新活动状态
                setTimeout(() => {
                    updateActiveTOCLink(id);
                }, 100);
            }
        });
        
        li.appendChild(a);
        tocList.appendChild(li);
    });
}

// 更新活动的目录链接
function updateActiveTOCLink(activeId) {
    document.querySelectorAll('.toc-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-heading-id') === activeId) {
            link.classList.add('active');
        }
    });
}

// 滚动跟随功能
let tocScrollTimeout;
function initTOCScrollFollow() {
    const contentBody = document.getElementById('contentBody');
    const markdownBody = contentBody.querySelector('.markdown-body');
    
    if (!markdownBody) return;
    
    contentBody.addEventListener('scroll', () => {
        clearTimeout(tocScrollTimeout);
        tocScrollTimeout = setTimeout(() => {
            const headings = markdownBody.querySelectorAll('h1[id], h2[id], h3[id]');
            let activeHeading = null;
            
            // 从下往上查找当前可见的标题
            for (let i = headings.length - 1; i >= 0; i--) {
                const heading = headings[i];
                const rect = heading.getBoundingClientRect();
                const contentRect = contentBody.getBoundingClientRect();
                
                // 如果标题在视口上方或可见区域内
                if (rect.top <= contentRect.top + 100) {
                    activeHeading = heading.id;
                    break;
                }
            }
            
            // 如果没找到，使用第一个标题
            if (!activeHeading && headings.length > 0) {
                activeHeading = headings[0].id;
            }
            
            if (activeHeading) {
                updateActiveTOCLink(activeHeading);
            }
        }, 50);
    });
}

// 加载文件内容
async function loadFile(filePath) {
    const contentBody = document.getElementById('contentBody');
    const contentTitle = document.getElementById('contentTitle');
    const tocSidebar = document.getElementById('tocSidebar');
    
    // 更新 URL hash（避免重复触发 hashchange）
    const newHash = encodeURIComponent(filePath);
    if (window.location.hash !== `#${newHash}`) {
        window.location.hash = newHash;
    }
    
    // 隐藏目录导航
    tocSidebar.classList.remove('visible');
    
    // 显示加载状态
    contentBody.innerHTML = '<div class="loading">加载中...</div>';
    
    try {
        // 从 docs 目录读取文件
        const response = await fetch(`docs/${filePath}`);
        if (!response.ok) {
            throw new Error(`文件加载失败: ${response.statusText}`);
        }
        
        const text = await response.text();
        
        // 使用 marked 渲染 Markdown
        if (typeof marked !== 'undefined') {
            const html = marked.parse(text);
            contentBody.innerHTML = `<div class="markdown-body">${html}</div>`;
            
            // 等待DOM更新后生成目录导航
            setTimeout(() => {
                generateTOC();
                // 初始化滚动跟随
                initTOCScrollFollow();
            }, 50);
        } else {
            // 如果 marked 未加载，显示原始文本
            contentBody.innerHTML = `<div class="markdown-body"><pre>${text}</pre></div>`;
        }
        
        // 更新标题
        const fileName = filePath.split('/').pop().replace('.md', '').replace(/^\d+_/, '');
        contentTitle.textContent = fileName;
        
        // 设置活动链接并展开父目录
        const link = document.querySelector(`a[data-path="${filePath}"]`);
        if (link) {
            setActiveLink(link);
            // 展开所有父目录
            expandParentFolders(link);
            // 滚动到活动链接
            setTimeout(() => {
                link.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        }
        
        // 滚动到顶部
        contentBody.scrollTop = 0;
    } catch (error) {
        console.error('加载文件失败:', error);
        contentBody.innerHTML = `<div class="error">加载失败: ${error.message}<br><br>提示: 请使用 HTTP 服务器运行此网站（不能直接打开 HTML 文件）。<br>可以使用 Python: python -m http.server 8000<br>或 Node.js: npx http-server</div>`;
        contentTitle.textContent = '错误';
    }
}

// 配置 marked 选项
if (typeof marked !== 'undefined') {
    marked.setOptions({
        breaks: true,
        gfm: true,
        headerIds: true,
        mangle: false
    });
}
