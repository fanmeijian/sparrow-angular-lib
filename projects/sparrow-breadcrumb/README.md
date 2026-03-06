add in your component
<spr-sparrow-breadcrumb></spr-sparrow-breadcrumb>

and if you want to hide content from your parent route, just add the below condition
*ngIf="!route.firstChild"

you can customize your style of breadcrumb
.spr-breadcrumb {
  display: flex;
  gap: 0.5rem;
  font-size: 0.9rem;
  align-items: center;
  padding-top: 3px;
  font-weight:normal;
}
.spr-breadcrumb-splitor{
}

.spr-breadcrumb-link, .spr-breadcrumb-last {
  cursor: pointer;
}

.spr-breadcrumb-link:hover {
  text-decoration: underline;

}
