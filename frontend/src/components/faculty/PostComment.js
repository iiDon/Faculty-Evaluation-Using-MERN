const PostComment = () => {
  return (
    <section className="border-2 mt-8 p-2 rounded">
        <h2>كتابة تعليق جديد</h2>
      <form action="" className="my-4 rounded  m-4space-y-4">
        <div>
          <textarea
            className="w-full p-3 text-sm border-gray-200 rounded-lg"
            placeholder="التعليق"
            rows="8"
            id="message"
          ></textarea>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-main rounded-lg sm:w-auto"
          >
            <span className="font-medium"> إرسال </span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default PostComment;
