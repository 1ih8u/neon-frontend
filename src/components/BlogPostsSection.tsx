const PostCard = () => (
  <div className="border border-white/50 rounded-3xl p-4 md:p-6 flex flex-col h-[420px] md:h-[480px] w-full">
    <div className="bg-[#303030] rounded-2xl w-full h-1/2 mb-6"></div>
    <h3 className="text-xl font-medium mb-3">Название статьи</h3>
    <p className="text-sm text-gray-300">
      Краткое описание краткое описание краткое описание краткое описание
      краткое описание
    </p>
  </div>
);

const BlogPostsSection = () => {
  return (
    <section className="bg-[#161616] text-white py-16 md:py-24">
      <div className="mx-auto px-[5%] md:px-[15%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </section>
  );
};

export default BlogPostsSection; 