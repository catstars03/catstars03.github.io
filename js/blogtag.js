// js/blogtag.js
// 获取所有标签
function getCategories() {
    const categories = [];
    const currentLang = getCurrentLanguage();
    const blogsData = getData(currentLang).blogs;
    blogsData.forEach(blog => {
        // 处理多个分类标签
        if (Array.isArray(blog.category)) {
            blog.category.forEach(cat => {
                if (!categories.includes(cat)) {
                    categories.push(cat);
                }
            });
        } else {
            // 兼容旧格式
            if (!categories.includes(blog.category)) {
                categories.push(blog.category);
            }
        }
    });
    return categories;
}

// 计算每个标签的博客数量
function getCategoryCount(category) {
    const currentLang = getCurrentLanguage();
    const blogsData = getData(currentLang).blogs;
    if (category === 'all') {
        return blogsData.length;
    }
    return blogsData.filter(blog => {
        if (Array.isArray(blog.category)) {
            return blog.category.includes(category);
        }
        // 兼容旧格式
        return blog.category === category;
    }).length;
}

// 渲染标签
function renderTags() {
    const tagContainer = document.getElementById('filterTags');
    const categories = getCategories();
    // 检查当前页面是否是英文版本
    const isEnglishVersion = window.location.pathname.includes('index-en.html') || window.location.pathname.includes('blog-en.html');
    // 根据语言版本显示不同的标题
    const allBlogsText = isEnglishVersion ? 'All Blogs' : '全部博客';
    let html = `<span class="tag active" data-category="all">${allBlogsText} <span class="tag-count">${getCategoryCount('all')}</span></span>`;
    
    categories.forEach(category => {
        html += `<span class="tag" data-category="${category}">${category} <span class="tag-count">${getCategoryCount(category)}</span></span>`;
    });
    
    // 替换除了第一个标签外的内容
    tagContainer.innerHTML = html;
    
    // 添加点击事件
    document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('click', function() {
            // 更新活动状态
            document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // 筛选博客
            const category = this.getAttribute('data-category');
            filterBlogs(category);
        });
    });
}

// 筛选博客
function filterBlogs(category) {
    const currentLang = getCurrentLanguage();
    const blogsData = getData(currentLang).blogs;
    const filteredBlogs = category === 'all' ? blogsData : blogsData.filter(blog => {
        if (Array.isArray(blog.category)) {
            return blog.category.includes(category);
        }
        // 兼容旧格式
        return blog.category === category;
    });
    renderBlogs(filteredBlogs);
}

// 渲染博客卡片
function renderBlogs(blogsToRender) {
    const container = document.getElementById('notesContainer');
    let html = '';
    const currentLang = getCurrentLanguage();
    
    blogsToRender.forEach((blog, index) => {
        // 构建文件URL
        const fileUrl = `blogs/${blog.file}`;
        const fileExtension = blog.file.split('.').pop().toLowerCase();
        
        // 构建卡片内容 - 确保使用自定义描述
        // 根据语言版本显示不同的默认描述和链接文本
        const defaultDescription = currentLang === 'en' ? `This is a blog about ${blog.category}` : `这是一篇关于${blog.category}的博客`;
        const readMoreText = currentLang === 'en' ? 'Read More' : '详细阅读';
        
        let description = blog.content || defaultDescription;
        // 如果内容包含HTML标签，不进行截断以避免破坏标签结构
        if (!description.includes('<') && description.length > 100) {
            description = description.substring(0, 100) + '...';
        }
        let cardContent = `<p>${description}</p>`;
        
        // 渲染分类标签
        let categoriesHtml = '';
        if (Array.isArray(blog.category)) {
            blog.category.forEach(cat => {
                categoriesHtml += `<span class="category-tag">${cat}</span>`;
            });
        } else {
            // 兼容旧格式
            categoriesHtml = `<span class="category-tag">${blog.category}</span>`;
        }
        
        html += `
            <div class="note-card" data-categories="${blog.category}">
                <div class="note-header">
                    <h3 class="note-title"><a href="${fileUrl}" class="note-title-link" target="_blank">${blog.title}</a></h3>
                    <div class="note-subtitle">${blog.subtitle}</div>
                    <div class="note-meta">
                        ${blog.date ? `<span class="mr-3"><i class="far fa-calendar-alt mr-1"></i> ${blog.date}</span>` : ''}
                        <div class="category-list">
                            ${categoriesHtml}
                        </div>
                    </div>
                </div>
                <div class="note-content">
                    ${cardContent}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// 页面加载完成后渲染博客和标签
document.addEventListener('DOMContentLoaded', function() {
    renderTags();
    const currentLang = getCurrentLanguage();
    renderBlogs(getData(currentLang).blogs);
});