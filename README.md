# Local development

```sh
npm install
npm run dev
```

Open http://localhost:3000. Run only one development server for this folder;
stop it with Ctrl+C before starting another. Do not add a trailing backslash
to the command.

Development uses Webpack with memory optimizations, two concurrent module
compilation tasks per compiler, and a 1536 MB Node.js old-generation heap
limit. Total process memory can exceed that heap limit. These settings favor
lower resource use; the first page compilation can take longer. Hot reload
and development error messages remain available.

Reference: https://nextjs.org/docs/app/guides/memory-usage
