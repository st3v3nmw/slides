import{o,c as r,k as u,e,ac as l,q as i,s as d,B as a}from"./modules/vue-erlImCx6.js";import{I as c}from"./slidev/default-DNyDrW-X.js";import{u as p,f as m}from"./slidev/context-1HTcGq0r.js";import"./index-LlaKh1ls.js";import"./modules/shiki-D1jugA53.js";const T={__name:"slides.md__slidev_24",setup(f){const{$slidev:h,$nav:g,$clicksContext:s,$clicks:k,$page:y,$renderContext:_,$frontmatter:n}=p();return s.setup(),(b,t)=>(o(),r(c,i(d(a(m)(a(n),23))),{default:u(()=>t[0]||(t[0]=[e("h1",null,"Periodic Tasks",-1),e("ul",null,[e("li",null,[l("Periodic tasks are one of the 4 horsemen of the apocalypse 😏. They should be avoided like the plague. "),e("ul",null,[e("li",null,[l("Instead, prefer event-driven tasks "),e("ul",null,[e("li",null,[l("These typa tasks run immediately after an event e.g. "),e("code",null,"instance.save"),l(", "),e("code",null,"instance.create"),l(", "),e("code",null,"instance.transition"),l(", Django signals, etc, …")]),e("li",null,[l("You can use Celery to set-up automatic retries for certain errors "),e("ul",null,[e("li",null,"Retry with exponential backoff to reduce load")])])])]),e("li",null,"For reporting, separate your transactional (Postgres) and analytical (BigQuery) databases so that reports don’t slow down your main database")])]),e("li",null,[l("If you must: "),e("ul",null,[e("li",null,[l("Do things in bulk e.g. "),e("code",null,"bulk_create"),l(", "),e("code",null,"bulk_update")]),e("li",null,[l("Use iterators when looping over a large number of objects ("),e("code",null,"qs.iterator()"),l(") "),e("ul",null,[e("li",null,"Helps reduce memory usage")])]),e("li",null,"Add indexes to fields that are used to filter. This speeds up reads but slows down writes (there’s no such thing as a free lunch)")])])],-1)])),_:1},16))}};export{T as default};