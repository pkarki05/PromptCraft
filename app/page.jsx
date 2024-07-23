import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Create & Share
      <br />
      <span className="orange_gradient text-center">Community-driven AI Prompts</span>
      </h1>
      <p className="desc text-center">PromptCraft is your go-to platform for creating and sharing AI prompts.
         It offers a seamless experience for users to collaborate on improving
          AI-generated content.</p>
          <Feed/>
    </section>
  )
}

export default Home
