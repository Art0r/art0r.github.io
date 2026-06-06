import { defineStore } from "pinia";
import DOMPurify from 'dompurify';
import { marked } from 'marked';

export interface BlogState {
  posts: Set<String> | null;
  selectedPost: String | null;
  selectedPostContent: String | null;
}

export const initialBlogState: BlogState = {
  posts: null,
  selectedPost: null,
  selectedPostContent: null
}

export const useBlogStore = defineStore('blog', {
  state: () => initialBlogState,
  actions: {
    async getPosts() {

      if (this.posts === null) this.posts = new Set<String>();

      const modules = import.meta.glob('/public/content/posts/*.md', { query: '?raw', eager: false });
      for (const mod in modules) {

        if (this.posts.has(mod)) continue;

        this.posts.add(mod.replace('/public/content/posts/', ''));
      }

    },
    async changeSelectedPost(newSelectedPost: String) {
      if (newSelectedPost) {
        this.selectedPost = newSelectedPost;
        try {
          const file = await fetch(`/content/posts/${newSelectedPost}`);
          const text = await file.text();
          const parsedContent = await marked.parse(text);
          this.selectedPostContent = DOMPurify.sanitize(parsedContent);
        } catch (error) {
          console.error('Error loading markdown:', error);
          this.selectedPostContent = 'Failed to load content';
        }
      }
    }
  }
});
