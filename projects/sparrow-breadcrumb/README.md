在需要的地方加入
<spr-sparrow-breadcrumb></spr-sparrow-breadcrumb>

在父路由的地方, 如果需要隐藏父路由的内容, 则用一下语句
*ngIf="!route.firstChild"

下面为导航的样式
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
