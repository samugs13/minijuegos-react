import { LangContext } from './LangContext';

export default function LangSelector(props) {
    return <LangContext.Consumer>
        {(context) => {
            return 
                <select onChange={context.handleChange} value={context.userLang}>
                    <option key="es" value="es">{context.dictionary["es"]}</option>
                    <option key="en" value="en">{context.dictionary["en"]}</option>
                </select>
            }
        }
    </LangContext.Consumer>
}