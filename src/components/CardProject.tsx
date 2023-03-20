import type { ProjectsFrontmatter } from "@content/_schemas";

export interface Props {
  href?: string;
  frontmatter: ProjectsFrontmatter;
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, description, technologies, repo, deployment, ogImage} = frontmatter;

  function renderButton(){
    if (repo == ""){
      return <a className=" bg-sky-500 text-lg font-medium border- border-slate-300 hover:border-slate-500 rounded-full" href={deployment}>Despliegue</a>
    } else if (deployment == ""){
      return <a className=" bg-sky-500 text-lg font-medium border- border-slate-300 hover:border-slate-500 rounded-full" href={repo}>Código</a>
    } else {
      <>
        <a className=" bg-sky-500 text-lg font-medium border- border-slate-300 hover:border-slate-500 rounded-full" href={repo}>Código</a>
        <a className=" bg-sky-500 text-lg font-medium border- border-slate-300 hover:border-slate-500 rounded-full" href={deployment}>Despliegue</a>
      </>
    }
  }
  
  return (
    <>
      <li className="my-6">
      <img className="bg-cover" src={ogImage} alt="Imagen del proyecto" />
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 className="text-lg font-medium decoration-dashed hover:underline">
            {title}
          </h2>
        ) : (
          <h3 className="text-lg font-medium decoration-dashed hover:underline">
            {title}
          </h3>
        )}
      </a>
      <p>{description}</p>
      <p>Tecnologias usadas: <span className="text-lg font-medium decoration-dashed hover:underline text-sky-400">{technologies}</span></p>
      { renderButton()}
      </li>
    </>
    
  );
}
