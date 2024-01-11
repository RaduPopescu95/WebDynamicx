import { useRouter } from "next/router";

function useCurrentUrl() {
  const router = useRouter();
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://webappdynamicx.ro";
  const currentUrl = `${baseUrl}${router.asPath || ""}`;

  return currentUrl;
}

export default useCurrentUrl;
