import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const Container = ({
  children,
  ...customMeta
}: {
  children: React.ReactNode;
  [key: string]: any;
}) => {
  const router = useRouter();

  const meta = {
    title: "X-Writer",
    description: "GPT-3 Writer",
    image: "https://eneaxharja.com/images/avatar.png",
    type: "website",
    date: new Date().toISOString(),
    ...customMeta,
  };

  return (
    <div className="bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://eneaxharja.com${router.asPath}`}
        />
        <link rel="canonical" href={`https://eneaxharja.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Enea Xharja" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@eneaxharja" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <main className="max-w-2xl mx-auto flex flex-col justify-center px-8 md:px-0 bg-gray-900">
        {children}

        <footer className="flex flex-col justify-center w-full my-8">
          <hr className="border-1 border-gray-800 mb-8" />
          <div className="flex flex-col">
            <Link
              href="/"
              className="text-sm text-center no-underline text-primary-50/50 hover:text-primary-50/70 transition"
            >
              © {new Date().getFullYear()} Enea Xharja
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Container;
