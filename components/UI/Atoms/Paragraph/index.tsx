import text from './style.module.css';

type TextProps = {
  marginX?: string | undefined,
  marginY?: string | undefined
}

const Paragraph: React.FC<TextProps> = ({children, marginX, marginY}) => {

  const margin = {
    marginLeft: "none",
    marginRight: "none",
    marginTop: "none",
    marginBottom: "none",
  }

  if(typeof marginX !== 'undefined' && marginX !== undefined){
    margin.marginLeft = `${marginX}px`;
    margin.marginRight = `${marginX}px`;
  }

  if(typeof marginY !== 'undefined' && marginY !== undefined){
    margin.marginTop = `${marginY}px`;
    margin.marginBottom = `${marginY}px`;
  }

  return (
    <p className={text.paragraph} style={margin}>
      {children}
    </p>
  )
};

export default Paragraph;