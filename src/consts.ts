// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = '逍姚故事館';
export const SITE_DESCRIPTION = '日本生活・開發日記・遊戲・音樂・小說・心情日記';

export const CATEGORIES: Record<string, { name: string; emoji: string; isWorks: boolean }> = {
	'japan-life': { name: '日本生活', emoji: '🗾', isWorks: false },
	'dev-diary':  { name: '開發日記', emoji: '💻', isWorks: false },
	'games':      { name: '遊戲作品', emoji: '🎮', isWorks: true },
	'music':      { name: '音樂作品', emoji: '🎵', isWorks: true },
	'novels':     { name: '小說作品', emoji: '📖', isWorks: true },
	'misc':       { name: '心情日記', emoji: '🗂️', isWorks: false },
	'vlog':       { name: 'VLOG',    emoji: '🎬', isWorks: false },
};

export const WORKS_CATEGORIES = ['games', 'music', 'novels'];
