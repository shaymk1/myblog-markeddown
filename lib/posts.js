
import {readFile}  from 'fs/promises'
import {marked} from 'marked';

export async function getPost(slug) {
	const source = await readFile(`content/posts/${slug}.md`);
    const html = marked(source)
	return {
        title:html
    }
}