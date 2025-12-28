// js/notetag.js
// 获取所有标签
function getCategories() {
    const categories = [];
    const currentLang = getCurrentLanguage();
    const notesData = getData(currentLang).notes;
    notesData.forEach(note => {
        if (Array.isArray(note.category)) {
            note.category.forEach(cat => {
                if (!categories.includes(cat)) {
                    categories.push(cat);
                }
            });
        } else {
            if (!categories.includes(note.category)) {
                categories.push(note.category);
            }
        }
    });
    return categories;
}

// 计算每个标签的笔记数量
function getCategoryCount(category) {
    const currentLang = getCurrentLanguage();
    const notesData = getData(currentLang).notes;
    if (category === 'all') {
        return notesData.length;
    }
    return notesData.filter(note => {
        if (Array.isArray(note.category)) {
            return note.category.includes(category);
        } else {
            return note.category === category;
        }
    }).length;
}

// 渲染标签
function renderTags() {
    const tagContainer = document.getElementById('filterTags');
    const categories = getCategories();
    // 获取当前语言
    const currentLang = getCurrentLanguage();
    // 根据语言版本显示不同的标题
    const allNotesText = currentLang === 'en' ? 'All Notes' : '全部笔记';
    let html = `<span class="tag active" data-category="all">${allNotesText} <span class="tag-count">${getCategoryCount('all')}</span></span>`;
    
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
            
            // 筛选笔记
            const category = this.getAttribute('data-category');
            filterNotes(category);
        });
    });
}

// 筛选笔记
function filterNotes(category) {
    const currentLang = getCurrentLanguage();
    const notesData = getData(currentLang).notes;
    const filteredNotes = category === 'all' ? notesData : notesData.filter(note => {
        if (Array.isArray(note.category)) {
            return note.category.includes(category);
        } else {
            return note.category === category;
        }
    });
    renderNotes(filteredNotes);
}

// 渲染笔记卡片
function renderNotes(notesToRender) {
    const container = document.getElementById('notesContainer');
    let html = '';
    
    notesToRender.forEach(note => {
        // 处理内容和评论中的换行符
        const formattedContent = note.content.replace(/\n/g, '<br>');
        
        // 渲染分类标签
        let categoriesHtml = '';
        if (Array.isArray(note.category)) {
            note.category.forEach(cat => {
                categoriesHtml += `<span class="category-tag">${cat}</span>`;
            });
        } else {
            categoriesHtml = `<span class="category-tag">${note.category}</span>`;
        }
        
        html += `
            <div class="note-card">
                <div class="note-header" onclick="toggleOutline(${note.id})">
                    <h3 class="note-title">${note.title}</h3>
                    <div class="note-subtitle">${note.subtitle}</div>
                    <div class="note-meta">
                        <span class="mr-3"><i class="far fa-calendar-alt mr-1"></i> ${note.date}</span>
                        <div class="category-list"><i class="fas fa-tag mr-1"></i> ${categoriesHtml}</div>
                    </div>
                </div>
                <div class="note-content" id="noteContent${note.id}">
                    <p>${formattedContent}</p>
                </div>
                <div class="note-outline" id="noteOutline${note.id}">
                    ${note.outline.map(item => {
                    // 处理大纲项评论中的换行符
                    const formattedComment = item.comment.replace(/\n/g, '<br>');
                    // 使用item.file属性作为PDF链接
                    const pdfLink = item.file || '';
                    return `
                        <div class="outline-item">
                            <a href="${pdfLink}" class="outline-link" download>
                                ${item.title}
                            </a>
                            <div class="outline-comment">${formattedComment}</div>
                        </div>
                    `;
                }).join('')}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// 切换显示目录
function toggleOutline(noteId) {
    const contentElement = document.getElementById(`noteContent${noteId}`);
    const outlineElement = document.getElementById(`noteOutline${noteId}`);
    const iconElement = document.getElementById(`toggleIcon${noteId}`);
    
    if (outlineElement.style.display === 'block') {
        outlineElement.style.display = 'none';
        contentElement.style.display = 'block';
        iconElement.classList.remove('rotated');
    } else {
        outlineElement.style.display = 'block';
        contentElement.style.display = 'none';
        iconElement.classList.add('rotated');
    }
}



// 页面加载完成后渲染笔记和标签
document.addEventListener('DOMContentLoaded', function() {
    renderTags();
    const currentLang = getCurrentLanguage();
    const notesData = getData(currentLang).notes;
    renderNotes(notesData);
});