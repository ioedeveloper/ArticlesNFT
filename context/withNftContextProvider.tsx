import Context from './nftContext'

const withUser = (Child: any ) => (props: any) => (
    <Context.Consumer>
      {(context) => <Child {...props} {...context} />}
      {/* Another option is:  {context => <Child {...props} context={context}/>}*/}
    </Context.Consumer>
  );