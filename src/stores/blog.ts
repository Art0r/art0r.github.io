import { defineStore } from "pinia";
import DOMPurify from 'dompurify';
import { marked } from 'marked';
export interface BlogState {
  selectedPost: String | null;
  selectedPostContent: String | null;
}

export const initialBlogState: BlogState = {
  selectedPost: null,
  selectedPostContent: null
}

export const useBlogStore = defineStore('blog', {
  state: () => initialBlogState,
  actions: {
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
