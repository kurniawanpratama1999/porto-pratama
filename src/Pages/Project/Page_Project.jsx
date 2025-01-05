import Container from "../../Components/Container";
import Comp_Card from "./Comp_Card";
import collection from "./Data";

const Page_Project = () => {
  return (
    <Container className="md:px-[10%] px-[5%] lg:px-[15%]  flex flex-col gap-5">
      {collection.map((collect, index) => (
        <Comp_Card
          key={index}
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
