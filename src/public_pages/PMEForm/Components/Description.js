import React,{useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
// import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import InfoPerso from './Formulaires/InfoPerso';
import { FileInput, Label, Modal, TextInput, Radio, Select, Button } from 'flowbite-react';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';

const steps = [
    {
        label: 'Informations du dirigeant',
        description: <InfoPerso />,
    },
    {
        label: 'Information de l\'entreprise',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
        label: 'Potentiel commercial et stratégie de croissance',
        description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },
];

export default function Description() {
    const [activeStep, setActiveStep] = useState(0);
    const [fullName, setFullName] = useState('')
    const [old, setOld] = useState(Date)
    const [genre, setGenre] = useState('')
    const [mail, setMail] = useState('')
    const [tel, setTel] = useState('')
    const [fonction, setFonction] = useState('')
    const [part, setPart] = useState(0)
    const [sigle, setSigle] = useState('')
    const [raisonSociale, setRaisonSociale] = useState('')
    const [secteur, setSecteur] = useState(0)
    const [sousSecteur, setSousSecteur] = useState(0)
    const [numeroRCCM, setNumeroRCCM] = useState('')
    const [arrondissement, setArrondissement] = useState(0)
    const [commune, setCommune] = useState(0)
    const [dept, setDept] = useState(0)
    const [dateCreation, setDateCreation] = useState(Date)
    const [adresse, setAdresse] = useState('')
    const [telEntreprise, setTelEntreprise] = useState('')
    const [mailEntreprise, setMailEntreprise] = useState('')
    const [bp, setBp] = useState('')
    const [statutJuridique, setStatutJuridique] = useState(0)
    const [capitaleSocial, setCapitalSocial] = useState(0)
    const [currentYear, setCurrentYear] = useState(0);
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    useEffect(() => {
        const getCurrentYear = () => {
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            setCurrentYear(year);
        };

        getCurrentYear();
    }, []);

    return (
        <div className='max-xl:px-4 px-14 mx-auto max-w-screen-xl text-left py-24 lg:py-15 sm:py-15'>
            <Box sx={{ maxWidth: 900 }}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel
                                optional={
                                    index === 2 ? (
                                        <Typography variant="caption">Dernière étape</Typography>
                                    ) : null
                                }
                            >
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                <Typography>
                                    {step.label == 'Informations du dirigeant' ? (
                                        <div className="space-y-6">
                                            <br />
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="nom" value={<span className='font-bold'>Nom(s) et prénoms(s) <span className='text-red-500'>*</span></span>} />
                                                </div>
                                                <TextInput id="nom" placeholder='Ex: John Doe' type="text" required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="datenais" value={<span className='font-bold'>Date de naissance <span className='text-red-500'>*</span></span>} />
                                                </div>
                                                <TextInput id="datenais" type="date" required />
                                            </div>
                                            <div>
                                                <fieldset className="flex max-w-md flex-col gap-4">
                                                    <legend className="mb-4"><span className='font-bold'>Genre <span className='text-red-500'>*</span></span></legend>
                                                    <div className="flex items-center gap-2">
                                                        <Radio id="united-state" name="countries" value="USA" defaultChecked />
                                                        <Label htmlFor="united-state">Homme</Label>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Radio id="germany" name="countries" value="Germany" />
                                                        <Label htmlFor="germany">Femme</Label>
                                                    </div>
                                                </fieldset>
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="mail" value={<span className='font-bold'>Adresse email <span className='text-red-500'>*</span></span>} />
                                                </div>
                                                <TextInput id="mail" placeholder='Ex: johndoe@gmail.com' type="text" required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="phone" value={<span className='font-bold'>Numéro de télephone mobile <span className='text-red-500'>*</span></span>} />
                                                </div>
                                                <TextInput id="phone" placeholder='Ex:0022960XXXXXX' type="text" required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="fonction" value={<span className='font-bold'>Fonction dans l'entreprise <span className='text-red-500'>*</span></span>} />
                                                </div>
                                                <Select id="fonction" required>
                                                    <option value=''>Sélectionner votre fonction dans l'entreprise</option>
                                                    <option value='Associé'>Associé</option>
                                                    <option value='Propriétaire'>Propriétaire</option>
                                                    <option value='Actionnaire'>Actionnaire</option>
                                                    <option value='Gestionnaire'>Gestionnaire</option>
                                                    <option value='Collaborateur'>Collaborateur</option>
                                                </Select>
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="part" value={<span className='font-bold'>Quel est votre pourcentage des parts sociales que vous détenez ? <span className='text-red-500'>*</span></span>} />
                                                </div>
                                                <TextInput id="part" placeholder='Ex:100' type="number" required />
                                            </div>
                                        </div>
                                    ) : step.label == 'Information de l\'entreprise' ? (
                                        <div className="space-y-6">
                                            <br />
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="sigle" value={<span className='font-bold'>Sigle de l'entreprise <span className='text-red-500'>*</span></span>} />
                                                </div>
                                                <TextInput id="sigle" placeholder='Ex: ADPME' type="text" required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="rason_sociale" value={<span className='font-bold'>Raison sociale <span className='text-red-500'>*</span></span>} />
                                                </div>
                                                <TextInput id="rason_sociale" placeholder='Ex: Agence de Developpement des Petites et Moyennes Entreprises' type="text" required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="capital_social" value={<span className='font-bold'>Capital social (en FCFA) <span className='text-red-500'>*</span></span>} />
                                                </div>
                                                <TextInput id="capital_social" placeholder='Ex: 50000000' type="number" required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="date_creation" value={<span className='font-bold'>Date de création de l'entreprise <span className='text-red-500'>*</span></span>} />
                                                </div>
                                                <TextInput id="date_creation" type="date" required />
                                            </div>

                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="tel" value={<span className='font-bold'>Télephone de l'entreprise <span className='text-red-500'>*</span></span>} />
                                                </div>
                                                <TextInput id="tel" placeholder='Ex: 0022945XXXXXX' type="text" required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="mail" value={<span className='font-bold'>Adresse mail de l'entreprise <span className='text-red-500'>*</span></span>} />
                                                </div>
                                                <TextInput id="mail" placeholder='Ex: adpme@gmail.com' type="mail" required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="dept" value={<span className='font-bold'>Département <span className='text-red-500'>*</span></span>} />
                                                </div>
                                                <Select id="dept" required>
                                                    <option value=''>Sélectionner votre département</option>
                                                    <option value='departement1'>Département 1</option>
                                                    <option value='departement2'>Département 2</option>
                                                    <option value='departement3'>Département 3</option>
                                                </Select>
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="com" value={<span className='font-bold'>Commune <span className='text-red-500'>*</span></span>} />
                                                </div>
                                                <Select id="com" required>
                                                    <option value=''>Sélectionner votre commune</option>
                                                    <option value='commune1'>Commune 1</option>
                                                    <option value='commune2'>Commune 2</option>
                                                    <option value='commune3'>Commune 3</option>
                                                </Select>
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="arrondissement" value={<span className='font-bold'>Arrondissement <span className='text-red-500'>*</span></span>} />
                                                </div>
                                                <Select id="arrondissement" required>
                                                    <option value=''>Sélectionner votre arrondissement</option>
                                                    <option value='arrondissement1'>Arrondissement 1</option>
                                                    <option value='arrondissement2'>Arrondissement 2</option>
                                                    <option value='arrondissement3'>Arrondissement 3</option>
                                                </Select>
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="quartier" value={<span className='font-bold'>Village ou quartier de ville <span className='text-red-500'>*</span></span>} />
                                                </div>
                                                <Select id="quartier" required>
                                                    <option value=''>Sélectionner votre village ou votre quartier</option>
                                                    <option value='quartier1'>Quartier 1</option>
                                                    <option value='quartier2'>Quartier 2</option>
                                                    <option value='quartier3'>Quartier 3</option>
                                                </Select>
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="adresse" value={<span className='font-bold'>Adresse physique de l'entreprise (Carré, Lot, ect...) <span className='text-red-500'>*</span></span>} />
                                                </div>
                                                <TextInput id="adresse" placeholder='Ex: c/20XX Lot X' type="text" required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="secteur" value={<span className='font-bold'>Secteur <span className='text-red-500'>*</span></span>} />
                                                </div>
                                                <Select id="secteur" required>
                                                    <option value=''>Sélectionner le secteur de l'entreprise</option>
                                                    <option value='Secteur1'>Secteur 1</option>
                                                    <option value='Secteur2'>Secteur 2</option>
                                                    <option value='Secteur3'>Secteur 3</option>
                                                </Select>
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="sous_secteur" value={<span className='font-bold'>Sous-secteur <span className='text-red-500'>*</span></span>} />
                                                </div>
                                                <Select id="sous_secteur" required>
                                                    <option value=''>Sélectionner le sous-secteur de l'entreprise</option>
                                                    <option value='Secteur1'>Sous-Secteur 1</option>
                                                    <option value='Secteur2'>Sous-Secteur 2</option>
                                                    <option value='Secteur3'>Sous-Secteur 3</option>
                                                </Select>
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="rccm" value={<span className='font-bold'>N° RCCM <span className='text-red-500'>*</span></span>} />
                                                </div>
                                                <TextInput id="rccm" placeholder='Ex: RCCM RB/COT/XX B XXXXX' type="text" required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="bp" value={<span className='font-bold'>Boîte postale <span className='text-red-500'>*</span></span>} />
                                                </div>
                                                <TextInput id="bp" placeholder='Ex: BP XXXXX' type="text" required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="statut_juridique" value={<span className='font-bold'>Statut juridique <span className='text-red-500'>*</span></span>} />
                                                </div>
                                                <Select id="statut_juridique" required>
                                                    <option value=''>Sélectionner le statut juridique de l'entreprise</option>
                                                    <option value='statut1'>Statut juridique 1</option>
                                                    <option value='statut2'>Statut juridique 2</option>
                                                    <option value='statut3'>Statut juridique 3</option>
                                                </Select>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <span>Quel est le montant de votre chiffre annuel moyen au cours des deux dernières années ? (en FCFA)</span>
                                            <div className='mt-4'>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="yearn-2" value={<span className='font-bold'>Indiquer le chiffre d'affaire et le nombre d'employé de {currentYear - 2} <span className='text-red-500'>*</span></span>} />
                                                </div>
                                                <div className='grid grid-cols-2 gap-2'>
                                                    <TextInput id="yearn-2" placeholder='Ex: 520XXXXXX' type="number" required />
                                                    <TextInput id="nbemployer-2" placeholder='Ex: 10' type="number" required />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="yearn-1" value={<span className='font-bold'>Indiquer le chiffre d'affaire et le nombre d'employé de {currentYear - 1} <span className='text-red-500'>*</span></span>} />
                                                </div>
                                                <div className='grid grid-cols-2 gap-2'>
                                                    <TextInput id="yearn-1" placeholder='Ex: 520XXXXXX' type="number" required />
                                                    <TextInput id="nbemployer-1" placeholder='Ex: 10' type="number" required />
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </Typography>
                                <Box sx={{ mb: 2, mt: 4 }}>
                                    <div className='inline-flex gap-2'>
                                        <Button
                                            onClick={handleNext}
                                            color=""
                                            className='rounded-l-lg rounded-tr-lg inline-flex items-center text-sm font-medium text-center text-white bg-amber-700 rounded-lg hover:bg-amber-800'

                                        >
                                            {index === steps.length - 1 ? 'Terminé' : 'Continuer'}
                                        </Button>
                                        <Button
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            color=""
                                            className='rounded-l-lg rounded-tr-lg inline-flex items-center text-sm font-medium text-center text-white bg-amber-700 rounded-lg hover:bg-amber-800'

                                        >
                                            Retour
                                        </Button>
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                        <Typography>Tous les étapes sont completer - Vous avez finis</Typography>
                        <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                            Réinitialiser
                        </Button>
                    </Paper>
                )}
            </Box>
            
        </div>
    );
}//detpt, commune, arrondissement, village ou quartiers et adresse(carré et autre), ajouter capital sociale(étape deux), nbre employer (étape 3), donner la possibilité d'enregistrer les associées selon si l'entreprise existe