import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button"
import theme from '../src/theme/theme';


export default function Home() {
  return (
    <div>
      <Typography variant="h2"> Esto es una prueba de material </Typography>
      <Button variant="contained" color="primary"> Color primaria </Button>
      <Button variant="contained" color="secondary"> Color secundario </Button>
    </div>
  
    
  )
}
