import { useEffect } from "react";

const PageScrollTop = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return props.children;
};
// export default withRouter(PageScrollTop);
export default PageScrollTop;
