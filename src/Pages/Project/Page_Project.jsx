import Container from "../../Components/Container";
import Comp_Card from "./Comp_Card";

const collection = [
  {
    title: "Nesting My ID",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, odio?",
    href: "https://nesting.my.id",
    createdAt: "November 2024",
    finishAt: "On Progress",
    software: "ReactJs, ExpressJs, MySQL, Tailwind Css",
  },
  {
    title: "Nesting My ID",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, odio?",
    href: "https://nesting.my.id",
    createdAt: "November 2024",
    finishAt: "On Progress",
    software: "ReactJs, ExpressJs, MySQL, Tailwind Css",
  },
];

const Page_Project = () => {
  return (
    <Container className="px-[15%] flex flex-col gap-5">
      {collection.map((collect) => (
        <Comp_Card
          title={collect.title}
          description={collect.description}
          href={collect.href}
          software={collect.software}
          createdAt={collect.createdAt}
          finishAt={collect.finishAt}
        />
      ))}
    </Container>
  );
};

export default Page_Project;
