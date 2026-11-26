const articles = [
  {
    title: "A fresh look at the things we make",
    category: "Company",
    status: "Published",
    updated: "Today, 10:42 AM",
    initials: "AL",
    color: "lavender"
  },
  {
    title: "The little details that make a big difference",
    category: "Design",
    status: "Draft",
    updated: "Yesterday, 4:18 PM",
    initials: "SK",
    color: "peach"
  },
  {
    title: "Notes from the field: spring edition",
    category: "Journal",
    status: "Published",
    updated: "May 18, 2025",
    initials: "JM",
    color: "mint"
  }
];

export default function Home() {
  return (
    <main className="shell">
      <aside className="sidebar">
        <a className="brand" href="#" aria-label="AkshayCMS home">
          <span className="brand-mark">a.</span>
          <span>akshay<span className="brand-light">cms</span></span>
        </a>

        <div className="workspace-label">WORKSPACE</div>
        <button className="workspace-switcher">
          <span className="workspace-avatar">A</span>
          <span className="workspace-name">Akshay&apos;s studio</span>
          <span className="chevron">⌄</span>
        </button>

        <div className="nav-label">MENU</div>
        <nav className="navigation" aria-label="Main navigation">
          <a className="nav-item active" href="#">
            <span className="nav-icon">▦</span> Overview
          </a>
          <a className="nav-item" href="#">
            <span className="nav-icon">▤</span> Articles
            <span className="nav-count">12</span>
          </a>
          <a className="nav-item" href="#">
            <span className="nav-icon">▧</span> Media library
          </a>
          <a className="nav-item" href="#">
            <span className="nav-icon">◷</span> Activity
          </a>
        </nav>

        <div className="sidebar-bottom">
          <div className="storage-card">
            <div className="storage-heading">
              <span>Storage</span>
              <span>68%</span>
            </div>
            <div className="storage-track"><span /></div>
            <p>6.8 GB of 10 GB used</p>
            <a href="#">Manage plan <span aria-hidden="true">→</span></a>
          </div>
          <button className="profile">
            <span className="profile-avatar">AK</span>
            <span className="profile-copy">
              <strong>Akshay Kumar</strong>
              <small>Administrator</small>
            </span>
            <span className="chevron">⌄</span>
          </button>
        </div>
      </aside>

      <section className="main-panel">
        <header className="topbar">
          <div className="breadcrumbs">Workspace <span>/</span> <strong>Overview</strong></div>
          <div className="topbar-actions">
            <button className="icon-button" aria-label="Search">⌕</button>
            <button className="icon-button notification" aria-label="Notifications">♧</button>
            <span className="topbar-divider" />
            <span className="online-dot" /> All systems operational
          </div>
        </header>

        <div className="content">
          <section className="welcome-row">
            <div>
              <div className="eyebrow">WEDNESDAY, MAY 21, 2025</div>
              <h1>Good morning, Akshay <span className="wave">✳</span></h1>
              <p className="welcome-copy">Here&apos;s what&apos;s happening with your content today.</p>
            </div>
            <a className="primary-button" href="#">
              <span>＋</span> New article
            </a>
          </section>

          <section className="stats-grid" aria-label="Content overview">
            <article className="stat-card">
              <div className="stat-top"><span>Total articles</span><span className="stat-icon purple">▤</span></div>
              <div className="stat-value">24</div>
              <div className="stat-foot"><span className="trend">↗ 12%</span> <span>vs. last month</span></div>
              <div className="sparkline purple-line"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
            </article>
            <article className="stat-card">
              <div className="stat-top"><span>Published</span><span className="stat-icon green">✓</span></div>
              <div className="stat-value">18</div>
              <div className="stat-foot"><span className="trend">↗ 8%</span> <span>vs. last month</span></div>
              <div className="sparkline green-line"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
            </article>
            <article className="stat-card">
              <div className="stat-top"><span>Drafts</span><span className="stat-icon amber">✎</span></div>
              <div className="stat-value">6</div>
              <div className="stat-foot"><span className="neutral">—</span> <span>same as last month</span></div>
              <div className="sparkline amber-line"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
            </article>
            <article className="stat-card">
              <div className="stat-top"><span>Media files</span><span className="stat-icon blue">▧</span></div>
              <div className="stat-value">142</div>
              <div className="stat-foot"><span className="trend">↗ 24%</span> <span>vs. last month</span></div>
              <div className="sparkline blue-line"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
            </article>
          </section>

          <section className="lower-grid">
            <article className="panel articles-panel">
              <div className="panel-heading">
                <div>
                  <h2>Recent articles</h2>
                  <p>Your latest content, all in one place.</p>
                </div>
                <a className="text-link" href="#">View all <span>→</span></a>
              </div>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th>ARTICLE</th><th>CATEGORY</th><th>STATUS</th><th>LAST UPDATED</th><th /></tr>
                  </thead>
                  <tbody>
                    {articles.map((article) => (
                      <tr key={article.title}>
                        <td>
                          <div className="article-cell">
                            <span className={`article-avatar ${article.color}`}>{article.initials}</span>
                            <strong>{article.title}</strong>
                          </div>
                        </td>
                        <td><span className="category">{article.category}</span></td>
                        <td><span className={`status ${article.status.toLowerCase()}`}><i />{article.status}</span></td>
                        <td className="updated">{article.updated}</td>
                        <td><button className="more-button" aria-label={`More options for ${article.title}`}>···</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <aside className="panel activity-panel">
              <div className="panel-heading">
                <div><h2>Quick actions</h2><p>Jump back into your workflow.</p></div>
              </div>
              <a className="action-card" href="#">
                <span className="action-icon lavender-bg">＋</span>
                <span><strong>Create an article</strong><small>Start writing something new</small></span>
                <span className="action-arrow">↗</span>
              </a>
              <a className="action-card" href="#">
                <span className="action-icon mint-bg">▧</span>
                <span><strong>Upload media</strong><small>Add images and files</small></span>
                <span className="action-arrow">↗</span>
              </a>
              <a className="action-card" href="#">
                <span className="action-icon peach-bg">⚙</span>
                <span><strong>Workspace settings</strong><small>Manage your workspace</small></span>
                <span className="action-arrow">↗</span>
              </a>
              <div className="tip-card">
                <span className="tip-icon">✦</span>
                <div><strong>Good things take shape.</strong><p>Your next great story is just a draft away.</p></div>
              </div>
            </aside>
          </section>

          <footer className="footer">
            <span>© 2025 AkshayCMS</span>
            <span>Made for people who make things <span className="heart">♥</span></span>
            <a href="#">Help &amp; support</a>
          </footer>
        </div>
      </section>
    </main>
  );
}
