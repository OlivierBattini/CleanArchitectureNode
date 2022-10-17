interface IUseCase<IRequest, IResponse> {
    execute(request?: IRequest): Promise<IResponse>;
}

export default IUseCase;